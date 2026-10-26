import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import RootLayout from "../pages/RootLayout";
import BlogPage from "../pages/BlogPage";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default router;
