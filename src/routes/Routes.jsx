import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout/LoginLayout";
import Main from "../layouts/Main";
import RecipiLayout from "../layouts/recipiLayout/RecipiLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import ViewReceipe from "../pages/ViewReceipe/ViewReceipe";

import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Error from "../pages/foroff/Error";
import OurCheif from "../pages/ourCheif/OurCheif";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to="/home"></Navigate>

            },

            {
                path: '/login',
                element: <Login></Login>
            }
            ,
            {
                path: "register",
                element: <Register></Register>
            }
        ]
    },

    {
        path: '*',
        element: <Error></Error>
    },

    {
        path: '/about',
        element: <About></About>
    },

    {
        path: '/blog',
        element: <Blog></Blog>
    },

    {
        path: 'home',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <OurCheif></OurCheif>
            },

        ]
    },

    {
        path: 'allCheifs',
        element: <PrivateRoutes>
            <RecipiLayout></RecipiLayout>
        </PrivateRoutes>,
        children: [
            {
                path: ':id',
                element: <ViewReceipe></ViewReceipe>,
                loader: ({ params }) => fetch(`https://food-corner-server-bijoymamud.vercel.app/allCheifs/${params.id}`)
            }
        ]
    }
])

export default router;