import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slices/UserSlice.jsx";

const store = configureStore({
  reducer: {
    users: UserSlice,
  },
});

export default store;
