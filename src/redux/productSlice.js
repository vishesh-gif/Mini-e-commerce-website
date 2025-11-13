import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    filtered: [],
  },
  reducers: {
    filterProduct: (state, action) => {
      const { categroy, products } = action.payload;
      state.filtered = products.filter(
        (product) => product.category === categroy
      );
    },
    clearFilter: (state) => {
      state.filtered = [];
    },

    searchFilter: (state, action) => {
      const { input, products } = action.payload;
      state.filtered = products.filter((product) =>
        product.title.toLowerCase().includes(input)
      );
    },
  },
});

export const { filterProduct, clearFilter, searchFilter } =
  productSlice.actions;

export default productSlice.reducer;
