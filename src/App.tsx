import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/notfound";
import Layout from "./layouts";
import Landing from "./pages/landing";

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
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Landing />,
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
