import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import wishListReducer from "./wishListSlice";
const appStore = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    wish: wishListReducer,
  },
});

export default appStore;
