import React from "react";
import Body from "./components/Body";
import appStore from "./redux/appStore";
import { Provider } from "react-redux";
import { createBrowserRouter } from "react-router-dom";
import ProductComponent from "./components/ProductComponent";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import { RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        { path: "/", element: <ProductComponent /> },
        { path: "/wishList", element: <WishList /> },
        { path: "/cart", element: <Cart /> },
      ],
    },
  ]);
  return (
    <Provider store={appStore}>
      <RouterProvider router={router}>
        <div>
          <Body />
        </div>
      </RouterProvider>
    </Provider>
  );
}

export default App;
