import { createBrowserRouter} from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../Register/Register";
import Login from "../Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
     {
          index:true,
          Component:Home,
     },
     {
          path:'/register',
          Component:Register,
     },
     {
          path:'/login',
          Component:Login,
     },
    ]
  },
]);

export default router;
