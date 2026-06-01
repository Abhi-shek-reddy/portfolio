import { createTheme } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark"): Theme => {
  const isDark = mode === "dark";

  return createTheme({
    palette: {
      mode,
      ...(isDark
        ? {
            background: { default: "#05090e", paper: "#080f14" },
            text: { primary: "#e8f4f0", secondary: "rgba(232,244,240,0.48)" },
            primary: { main: "#00ffb4", contrastText: "#05090e" },
            divider: "rgba(255,255,255,0.07)",
          }
        : {
            background: { default: "#0d1b2a", paper: "#091420" },
            text: { primary: "#e0f2ff", secondary: "rgba(224,242,255,0.48)" },
            primary: { main: "#fbbf24", contrastText: "#0d1b2a" },
            divider: "rgba(99,179,255,0.1)",
          }),
    },

    typography: {
      fontFamily: "'Outfit', 'Space Mono', sans-serif",
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: isDark ? "#05090e" : "#0d1b2a",
            color:           isDark ? "#e8f4f0" : "#e0f2ff",
            margin: 0,
            padding: 0,
          },
        },
      },
      MuiPaper: {
        styleOverrides: { root: { backgroundImage: "none" } },
      },
      MuiButton: {
        styleOverrides: {
          containedPrimary: {
            backgroundColor: isDark ? "#00ffb4" : "#fbbf24",
            color:           isDark ? "#05090e"  : "#0d1b2a",
            "&:hover": { backgroundColor: isDark ? "#00e8a3" : "#f59e0b" },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            color: isDark ? "#e8f4f0" : "#e0f2ff",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: isDark ? "rgba(0,255,180,0.15)" : "rgba(99,179,255,0.15)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: isDark ? "#00ffb4" : "#fbbf24",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: isDark ? "#00ffb4" : "#fbbf24",
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: isDark ? "rgba(232,244,240,0.48)" : "rgba(224,242,255,0.48)",
            "&.Mui-focused": { color: isDark ? "#00ffb4" : "#fbbf24" },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderColor: isDark ? "rgba(255,255,255,0.07)" : "rgba(99,179,255,0.1)",
            color: isDark ? "rgba(232,244,240,0.5)" : "rgba(224,242,255,0.48)",
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: isDark ? "#05090e" : "#0d1b2a",
            backgroundImage: "none",
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            backgroundColor: isDark ? "rgba(5,9,14,0.97)" : "rgba(13,27,42,0.97)",
            backgroundImage: "none",
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: isDark ? "#080f14" : "#091420",
            color:           isDark ? "#e8f4f0" : "#e0f2ff",
            border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(99,179,255,0.15)"}`,
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.62rem",
          },
        },
      },
      MuiSnackbar: {
        defaultProps: {
          anchorOrigin: { vertical: "bottom", horizontal: "center" },
        },
      },
    },
  });
};