import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "User",
  initialState: {
    isLoggedIn: false,
    userId: "",
    userName: "",
    userEmail: "",
    userRegNo: "",
  },
  reducers: {
    loginUser(state, action) {
      state.isLoggedIn = true;
      const { _id, name, email, regNo } = action.payload;
      state.userId = _id;
      state.userName = name;
      state.userEmail = email;
      state.userRegNo = regNo;
    },
    logoutUser(state) {
      state.isLoggedIn = false;
      state.userId = "";
    },
  },
});

export default UserSlice.reducer;
export const { loginUser, logoutUser } = UserSlice.actions;
