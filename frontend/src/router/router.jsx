import { createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import About from "../pages/about/About";
import DonorsList from "../pages/donors-list/DonorsList";
import FAQ from "../pages/faq/FAQ";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/donors-list",
                element: <DonorsList/>
            },
            {
                path: "/faq",
                element: <FAQ/>
            },
        ]
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    }
]);

export default router;