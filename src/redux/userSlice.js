import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {
      isLoggedIn: false,
    },
  },
  reducers: {
    createUser: (state, action) => {
      state.userData = { isLoggedIn: true, ...action.payload };
    },
  },
});
