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
  ProductUpdate,
} from "./pages";

// loaders
import { loader as productsLoader } from "./pages/Products";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as UpdateProductLoader } from "./pages/ProductUpdate";

// actions
import { action as createProductAction } from "./pages/ProductCreate";
import { action as updateProductAction } from "./pages/ProductUpdate";

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
        path: "/update-product/:id",
        element: <ProductUpdate />,
        loader: UpdateProductLoader,
        action: updateProductAction, // use the action to update a product
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
