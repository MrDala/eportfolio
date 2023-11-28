import { createBrowserRouter } from "react-router-dom";
import Accueil from "../pages/Accueil";
import Test from "../pages/Test";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil lang="fr"/>
  },
  {
    path: "/accueil",
    element: <Accueil lang="fr"/>
  },
  {
    path: "/test",
    element: <Test lang={"en"} />
  }
]);
