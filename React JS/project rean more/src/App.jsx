import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ":id",
        element: <ProductDetail />,
      },
      {
        path: "service",
        element: <h2>service Page</h2>,
      },
      {
        path: "accessories",
        element: <h2>Accessory page</h2>,
      },
      {
        path: "about",
        element: <h2>About Page</h2>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
