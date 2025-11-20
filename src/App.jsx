import React from "react";
import Body from "./components/Body";
import appStore from "./redux/appStore";
import { Provider } from "react-redux";
import { createBrowserRouter } from "react-router-dom";
import ProductComponent from "./components/ProductComponent";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import { RouterProvider } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import { Toaster } from "react-hot-toast";
import Profile from "./pages/Profile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        { path: "/", element: <ProductComponent /> },
        { path: "/wishList", element: <WishList /> },
        { path: "/cart", element: <Cart /> },
        { path: "/productDetails/:id", element: <ProductDetails /> },
        { path: "/checkOut", element: <Checkout /> },
        { path: "/profile", element: <Profile /> },
      ],
    },
  ]);
  return (
    <Provider store={appStore}>
      <Toaster position="bottom-right" />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
