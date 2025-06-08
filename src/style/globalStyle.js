import { GlobalStyles as MUIGlobalStyles } from "@mui/material";
//import "../font/Font.module.css";
import React from "react";

export default function GlobalStyle() {
  const inputGlobalStyle = (
    <MUIGlobalStyles
      styles={{
        "*": {
          boxSizing: "border-box",
          fontFamily: "Pretendard Variable",
        },
        html: {
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
          //WebkitOverflowScrolling: "touch",
        },
        body: {
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
        },
        "#root": {
          width: "100%",
          height: "100%",
        },
        input: {
          outline: "none",
          "&[type=number]": {
            MozAppearance: "textfield",
            "&::-webkit-outer-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
            "&::-webkit-inner-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
          },
        },
        img: {
          display: "block",
          maxWidth: "100%",
          WebkitUserDrag: "none",
        },
        ul: {
          margin: 0,
          padding: 0,
        },
        a: {
          textDecoration: "none",
          color: "inherit",
        },
      }}
    />
  );

  return inputGlobalStyle;
}
