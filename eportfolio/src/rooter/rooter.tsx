import { createBrowserRouter } from "react-router-dom";
import Accueil from "../pages/Accueil";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil lang="fr"/>
  },
  {
    path: "/accueil",
    element: <Accueil lang="fr"/>
  }
]);
