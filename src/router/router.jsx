import Home from "../pages/Home.jsx";
import Layout from "../layout/Layout.jsx";
import Today from "../pages/Today.jsx";
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
            }
        ],
    },
]);

export default routerRecuerda;
