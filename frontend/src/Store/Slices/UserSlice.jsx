import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "User",
  initialState: { userId: "", isLoggedIn: false },
  reducers: {
    loginUser(state, action) {
      state.isLoggedIn = true;
      state.userId = action.payload;
    },
    logoutUser(state) {
      state.isLoggedIn = false;
      state.userId = "";
    },
  },
});

export default UserSlice.reducer;
export const { loginUser, logoutUser } = UserSlice.actions;
