import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../Register/Register";
import Login from "../Login/Login";
import JobDetails from "../pages/Home/JobDetails";
import PrivateRoute from "../routes/PrivateRoute";
import JobApply from "../pages/Home/JobApply";
import MyApplications from "../pages/Home/MyApplications";
import AddJob from "../Shared/AddJob";
import MyPostedJobs from "../Shared/MyPostedJobs";
import ViewApplications from "../Shared/ViewApplications";

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
        element: (
          <PrivateRoute>
            <JobApply></JobApply>
          </PrivateRoute>
        ),
      },
      {
        path: "/myApplications",
        element: (
          <PrivateRoute>
            <MyApplications></MyApplications>
          </PrivateRoute>
        ),
      },
      {
        path: "/addJob",
        element: (
          <PrivateRoute>
            <AddJob></AddJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/myPostedJobs",
        element: (
          <PrivateRoute>
            <MyPostedJobs></MyPostedJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "applications/:job_id",
        element: (
          <PrivateRoute>
            <ViewApplications></ViewApplications>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/applications/job/${params.job_id}`).then(
            (res) => res.json()
          ),
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
