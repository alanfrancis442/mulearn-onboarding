import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/notfound";
import Layout from "./layouts";
import Landing from "./pages/landing";
import Questions from "./pages/questions";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Completed from "./pages/completed";
import Home from "@/pages/home";
import Describe from "./pages/describe";
import LearnignCircle from "./pages/lc";
import LcEvent from "./pages/lcEvent";
import Profile from "./pages/profile";

function App() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/404",
      element: <NotFound />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/questions",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Questions />,
        },
      ],
    },
    {
      path: "/completed",
      element: <Completed />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/describe",
      element: <Describe />,
    },
    {
      path: "/lc",
      element: <LearnignCircle />,
    },
    {
      path: "/lc/:id",
      element: <LcEvent />,
    },
    {
      path: "/profile",
      element: <Profile />

    }
    // {
    //   path: "/",
    //   element: <BusinessLayout />,
    //   children: [
    //     {
    //       path: "business",
    //       element: <Business />,
    //     },
    //     {
    //       path: "realestate",
    //       element: <RealEstate />,
    //     },
    //     {
    //       path: "marketing",
    //       element: <Marketing />,
    //     },
    //   ],
    // },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
