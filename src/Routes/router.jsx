import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Main/Root";
import Login from "../Pages/AuthPages/Login";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/AuthPages/SignUp";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import { useParams } from 'react-router-dom';
import Details from "../Pages/RestaurantDetails/Details";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path: "/",
            element:<Home/>,
            loader: ()=>fetch('./data.json'),

        },
        {
            path:"/aboutus",
            element:<AboutUs/>
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path: "details/:id",
            element:<Details/>,
            loader: ()=>fetch('/data.json')
        }
      ]
    },
    {
        path: "/login",
        element:<Login/>
    },
    {
        path:"/signup",
        element:<SignUp/>
    }
  ]);

  export default router;