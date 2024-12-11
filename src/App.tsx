import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/notfound";
import Layout from "./layouts";
import Landing from "./pages/landing";
import Questions from "./pages/questions";
import Signup from "./pages/signup";
import Signin from "./pages/signin";

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
