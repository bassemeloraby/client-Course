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
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";


import { store } from "./app/store";
import AuthGuard from "./components/AuthGuard";


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
        element: (
          <AuthGuard>
            <Products />
          </AuthGuard>
        ),
        loader: productsLoader,
      },
      {
        path: "/products/:id",
        element: (
          <AuthGuard>
            <SingleProduct />
          </AuthGuard>
        ),
        loader: singleProductLoader,
      },
      {
        path: "/create-product",
        element: (
          <AuthGuard>
            <ProductCreate />
          </AuthGuard>
        ),
        action: createProductAction, // use the action to create a new product
      },
      {
        path: "/update-product/:id",
        element: (
          <AuthGuard>
            <ProductUpdate />
          </AuthGuard>
        ),
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
    action: loginAction(store), // use the action to login a user
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action: registerAction, // use the action to register a new user
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
