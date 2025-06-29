import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Forecast } from "./screens/Forecast";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Forecast />
  </StrictMode>,
);