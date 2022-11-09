import { createBrowserRouter } from "react-router-dom";
import AddServices from "../../Admin/AddServices/AddServices";
import Admin from "../../Admin/Admin/Admin";
import AllServices from "../../AllServices/AllServices/AllServices";
import About from "../../components/About/About";
import Blog from "../../components/Blog/Blog";
import Error from "../../components/Error/Error";
import Home from "../../components/Home/Home/Home";
import Login from "../../components/Login/Login/Login";
import Register from "../../components/Login/Register/Register";
import Reviews from "../../components/Reviews/Reviews";
import Main from "../../layout/Main/Main";
import Subsidiary from "../../layout/Subsidiary/Subsidiary";
import ServiceDetails from "../../ServiceDetails/ServiceDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                element: <PrivateRoute><Reviews></Reviews></PrivateRoute>
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
            {
                path: '/allServices',
                element: <AllServices></AllServices>
            },
            {
                path: '/allServices/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/allServices/${params.id}`)
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
                element: <PrivateRoute><Admin></Admin></PrivateRoute>
            },
            {
                path: '/admin/addServices',
                element: <AddServices></AddServices>
            }
        ]
    }
])