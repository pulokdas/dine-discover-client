import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Main/Root";
import Login from "../Pages/AuthPages/Login";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/AuthPages/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path: "/",
            element:<Home/>

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