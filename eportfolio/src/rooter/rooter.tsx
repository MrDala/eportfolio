import { createBrowserRouter } from "react-router-dom";
import { Langues } from "../tools/langues";
import Accueil from "../pages/Accueil";
import { defaultLangue } from "../tools/function";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil defaultLangue={defaultLangue()}/>
  },
  {
    path: "/accueil",
    element: <Accueil defaultLangue={Langues.EN}/>
  }
]);
