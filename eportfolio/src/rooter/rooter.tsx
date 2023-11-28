import { createBrowserRouter } from "react-router-dom";
import { Langues } from "../tools/langues";
import Accueil from "../pages/Accueil";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil lang={Langues.EN}/>
  },
  {
    path: "/accueil",
    element: <Accueil lang={Langues.EN}/>
  }
]);
