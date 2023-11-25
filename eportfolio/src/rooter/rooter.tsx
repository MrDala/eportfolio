import { createBrowserRouter } from "react-router-dom";
import Accueil from "../pages/Accueil";
import Test from "../pages/Test";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />
  },
  {
    path: "/accueil",
    element: <Accueil />
  },
  {
    path: "/test",
    element: <Test />
  }
]);
