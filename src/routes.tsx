import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./home/page";




export const router = createBrowserRouter([
   {
    children: [
        {
          path: "/",
          element: <App />,
        },
        {
            path: "/home",
            element: <HomePage />,
          },
    ]
   }
])