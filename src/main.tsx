import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "./components/theme";
import { useState } from "react";

const Root = () => {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <CssBaseline />
      <App setMode={setMode} mode={mode} />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Root />);