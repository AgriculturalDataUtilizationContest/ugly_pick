import React from "react";
import { router } from "./Router";
import { RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import GlobalStyle from "./style/globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
