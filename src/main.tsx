import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/global.tsx";
import AppRouter from "./routes.tsx";
import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>
);
