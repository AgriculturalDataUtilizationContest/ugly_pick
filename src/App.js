import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import ThemeProvider from "./theme/ThemeProvider";
import GlobalStyle from "./style/globalStyle";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;