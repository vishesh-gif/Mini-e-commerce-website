import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const wishListSlice = createSlice({
  name: "wish",
  initialState: {
    wishList: [],
  },
  reducers: {
    addToWishList: (state, action) => {
      const newProduct = state.wishList.find((p) => p.id === action.payload.id);
      console.log(newProduct);
      if (newProduct) {
        toast.error("Already in WishList");
        return;
      } else {
        state.wishList.push(action.payload);
      }
    },
    removeWishListItem: (state, action) => {
      state.wishList = state.wishList.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addToWishList, removeWishListItem } = wishListSlice.actions;
export default wishListSlice.reducer;
