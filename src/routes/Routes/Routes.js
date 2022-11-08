import { createBrowserRouter } from "react-router-dom";
import About from "../../components/About/About";
import Blog from "../../components/Blog/Blog";
import Home from "../../components/Home/Home/Home";
import Login from "../../components/Login/Login/Login";
import Register from "../../components/Login/Register/Register";
import Reviews from "../../components/Reviews/Reviews";
import Main from "../../layout/Main/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
    }
])