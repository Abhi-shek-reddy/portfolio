import React, { useEffect, useRef } from "react";

/**
 * Raw data (dataColor dots) flows left → right through
 * ingest → transform → model gates, gets more ordered at each step,
 * then lights up a small neural network in modelColor.
 * The cursor pushes the data around.
 */
type Props = {
  dataColor: string;   // hex, e.g. "#fbbf24"
  modelColor: string;  // hex, e.g. your accent "#00ffb4"
  labelColor: string;  // any CSS color for the gate labels
  height?: number;
};

const hexToRgb = (hex: string): [number, number, number] => {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(full, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};

type FlowNode = { x: number; y: number; glow: number };
type Particle = {
  x: number; y: number; baseY: number; vx: number; phase: number;
  lane: number; stage: number; layer: number; node: FlowNode | null; alive: boolean;
};

const PipelineFlow: React.FC<Props> = ({ dataColor, modelColor, labelColor, height = 210 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const A = hexToRgb(dataColor);
    const B = hexToRgb(modelColor);
    const mix = (k: number) => A.map((v, i) => Math.round(v + (B[i] - v) * k));
    const rgba = (c: number[], a: number) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;

    let W = 0, H = 0, t = 0, raf = 0;
    let gates: { x: number; label: string }[] = [];
    let lanes: number[] = [];
    let layers: FlowNode[][] = [];
    let particles: Particle[] = [];
    const mouse = { x: -999, y: -999 };

    const layout = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const top = H * 0.22, bottom = H * 0.95;
      gates = [
        { x: W * 0.2, label: "ingest" },
        { x: W * 0.42, label: "transform" },
        { x: W * 0.62, label: "model" },
      ];
      lanes = Array.from({ length: 6 }, (_, i) => top + ((bottom - top) * (i + 0.5)) / 6);
      const cols = [0.74, 0.85, 0.95];
      const counts = [5, 3, 1];
      layers = cols.map((cx, li) =>
        Array.from({ length: counts[li] }, (_, i) => ({
          x: W * cx,
          y: top + ((bottom - top) * (i + 0.5)) / counts[li],
          glow: 0,
        }))
      );
      particles = [];
    };

    const spawn = () => {
      const y = lanes[0] - 10 + Math.random() * (lanes[lanes.length - 1] - lanes[0] + 20);
      particles.push({
        x: -6, y, baseY: y, vx: 0.6 + Math.random() * 0.6, phase: Math.random() * 6.28,
        lane: Math.floor(Math.random() * lanes.length), stage: 0, layer: -1, node: null, alive: true,
      });
    };

    const step = () => {
      t++;
      if (particles.length < 120 && t % 2 === 0) spawn();

      for (const p of particles) {
        while (p.stage < 3 && p.x > gates[p.stage].x) p.stage++;

        if (p.stage < 3) {
          let ty: number;
          if (p.stage === 0) ty = p.baseY + Math.sin(t * 0.02 + p.phase) * 14;          // noisy
          else if (p.stage === 1) ty = lanes[p.lane] + Math.sin(t * 0.05 + p.phase) * 4; // sorted
          else ty = lanes[p.lane];                                                        // clean
          p.y += (ty - p.y) * (p.stage === 0 ? 0.03 : 0.08);
          p.x += p.vx * (1 + p.stage * 0.25);
        } else {
          if (!p.node) {
            p.layer = 0;
            p.node = layers[0][Math.floor(Math.random() * layers[0].length)];
          }
          const dx = p.node.x - p.x, dy = p.node.y - p.y, d = Math.hypot(dx, dy);
          if (d < 3) {
            p.node.glow = 1;
            p.layer++;
            if (p.layer >= layers.length) { p.alive = false; continue; }
            p.node = layers[p.layer][Math.floor(Math.random() * layers[p.layer].length)];
          } else {
            p.x += (dx / d) * 1.8;
            p.y += (dy / d) * 1.8;
          }
        }

        const mx = p.x - mouse.x, my = p.y - mouse.y, md = mx * mx + my * my;
        if (md < 3000) {
          const f = (3000 - md) / 3000;
          p.x += (mx / 25) * f;
          p.y += (my / 25) * f;
        }
      }
      particles = particles.filter((p) => p.alive && p.x < W + 10);
      for (const l of layers) for (const n of l) n.glow *= 0.94;
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // gates
      ctx.font = "11px 'Space Mono', monospace";
      for (const g of gates) {
        ctx.globalAlpha = 0.35;
        ctx.strokeStyle = labelColor;
        ctx.setLineDash([3, 5]);
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(g.x, lanes[0] - 16);
        ctx.lineTo(g.x, lanes[lanes.length - 1] + 12);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.globalAlpha = 1;
        ctx.fillStyle = labelColor;
        ctx.fillText(g.label, g.x - ctx.measureText(g.label).width / 2, lanes[0] - 24);
      }

      // network edges
      for (let l = 0; l < layers.length - 1; l++) {
        for (const a of layers[l]) for (const b of layers[l + 1]) {
          const k = Math.max(a.glow, b.glow);
          ctx.strokeStyle = rgba(B, 0.1 + k * 0.4);
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // particles: raw = round dots, structured = squares
      for (const p of particles) {
        const k = p.stage / 3;
        ctx.fillStyle = rgba(mix(k), 0.6 + k * 0.35);
        if (p.stage >= 2) ctx.fillRect(p.x - 1.6, p.y - 1.6, 3.2, 3.2);
        else { ctx.beginPath(); ctx.arc(p.x, p.y, 1.7, 0, 6.28); ctx.fill(); }
      }

      // network nodes
      for (const l of layers) for (const n of l) {
        ctx.fillStyle = "rgba(0,0,0,0.6)";
        ctx.strokeStyle = rgba(B, 0.5 + n.glow * 0.5);
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 5 + n.glow * 2.5, 0, 6.28);
        ctx.fill();
        ctx.stroke();
        if (n.glow > 0.05) {
          ctx.fillStyle = rgba(B, n.glow);
          ctx.beginPath();
          ctx.arc(n.x, n.y, 2.5, 0, 6.28);
          ctx.fill();
        }
      }
    };

    const stillFrame = () => { for (let i = 0; i < 500; i++) step(); draw(); };
    const loop = () => { step(); draw(); raf = requestAnimationFrame(loop); };

    layout();
    const ro = new ResizeObserver(() => { layout(); if (reduce) stillFrame(); });
    ro.observe(canvas);

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => { mouse.x = mouse.y = -999; };
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    if (reduce) stillFrame();
    else loop();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, [dataColor, modelColor, labelColor]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ width: "100%", height, display: "block" }}
    />
  );
};

export default PipelineFlow;