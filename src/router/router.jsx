import Home from "../pages/Home.jsx";
import Layout from "../layout/Layout.jsx";
import Today from "../pages/Today.jsx";
import Login from "../pages/login.jsx";
import { createBrowserRouter } from "react-router-dom";

const routerRecuerda = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "today",
                element: <Today />,
            },
             {
        path: "login",
        element: <Login />,
      },
        ],
  },
  //SIN NAV Y FOOTER
//   {
//     path: "/login",
//     element: <Login />,
//   }, 
]);

export default routerRecuerda;
