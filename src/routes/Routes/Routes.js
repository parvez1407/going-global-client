import { createBrowserRouter } from "react-router-dom";
import AddServices from "../../Admin/AddServices/AddServices";
import Admin from "../../Admin/Admin/Admin";
import About from "../../components/About/About";
import Blog from "../../components/Blog/Blog";
import Error from "../../components/Error/Error";
import Home from "../../components/Home/Home/Home";
import Login from "../../components/Login/Login/Login";
import Register from "../../components/Login/Register/Register";
import Reviews from "../../components/Reviews/Reviews";
import Main from "../../layout/Main/Main";
import Subsidiary from "../../layout/Subsidiary/Subsidiary";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/review',
                element: <Reviews></Reviews>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: '/admin',
        element: <Subsidiary></Subsidiary>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/admin',
                element: <Admin></Admin>
            },
            {
                path: '/admin/addServices',
                element: <AddServices></AddServices>
            }
        ]
    }
])