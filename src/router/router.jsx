import Home from "../pages/Home.jsx";
import Layout from "../layout/Layout.jsx";
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
        ],
    },
]);

export default routerRecuerda;
