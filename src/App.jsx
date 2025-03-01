import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  About,
  Login,
  Register,
  ProductCreate,
} from "./pages";

// loaders
import { loader as productsLoader } from "./pages/Products";
import { loader as singleProductLoader } from "./pages/SingleProduct";

// actions
import { action as createProductAction } from "./pages/ProductCreate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,

    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/products",
        element: <Products />,
        loader: productsLoader,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
        loader: singleProductLoader,
      },
      {
        path: "/create-product",
        element: <ProductCreate />,
        action: createProductAction, // use the action to create a new product
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
