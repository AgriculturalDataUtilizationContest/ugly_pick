import { createBrowserRouter } from "react-router-dom";
import CopyLink from "./components/CopyLink";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CopyLink />,
  },
]);
