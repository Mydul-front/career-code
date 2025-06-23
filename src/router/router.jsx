import { createBrowserRouter} from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../Register/Register";
import Login from "../Login/Login";
import JobDetails from "../pages/Home/JobDetails";
import PrivateRoute from "../routes/PrivateRoute";
import JobApply from "../pages/Home/JobApply";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/jobs/:id",
        Component: JobDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/jobApply/:id",
        element:<PrivateRoute><JobApply></JobApply></PrivateRoute>
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);

export default router;
