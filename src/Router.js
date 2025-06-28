import { createBrowserRouter } from "react-router-dom";
import { Main } from "./screens/Main";
import CopyLink from "./components/CopyLink";
import { Forecast } from "./pages/forecast";
import { Search } from "./pages/search";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/copy",
    element: <CopyLink />,
  },
  {
    path: "/forecast",
    element: <Forecast />,
  },
  {
    path: "/search",
    element: <Search />,
  },
]);
