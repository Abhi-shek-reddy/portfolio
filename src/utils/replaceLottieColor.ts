export const replaceLottieColor = (animationData: any, colorHex: string): any => {
  const colorArray = hexToLottieColor(colorHex);

  const updated = JSON.parse(JSON.stringify(animationData));
  const layers = updated.layers || [];

  layers.forEach((layer: any) => {
    if (layer.shapes) {
      layer.shapes.forEach((shape: any) => {
        if (shape.it) {
          shape.it.forEach((item: any) => {
            if (item.c && item.c.k) {
              item.c.k = colorArray;
            }
          });
        }
      });
    }
  });

  return updated;
};

const hexToLottieColor = (hex: string): [number, number, number, number] => {
  const bigint = parseInt(hex.replace("#", ""), 16);
  const r = ((bigint >> 16) & 255) / 255;
  const g = ((bigint >> 8) & 255) / 255;
  const b = (bigint & 255) / 255;
  return [r, g, b, 1];
};
