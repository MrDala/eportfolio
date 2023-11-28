import { createBrowserRouter } from "react-router-dom";
import Accueil from "../pages/Accueil";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil lang="en"/>
  },
  {
    path: "/accueil",
    element: <Accueil lang="en"/>
  }
]);
