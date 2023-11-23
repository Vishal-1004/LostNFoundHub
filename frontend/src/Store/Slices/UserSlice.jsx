import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "User",
  initialState: {
    isLoggedIn: false,
    userId: "",
    userName: "",
    userEmail: "",
    userRegNo: "",
    userDayORHostel: "",
  },
  reducers: {
    loginUser(state, action) {
      state.isLoggedIn = true;
      const { _id, name, email, regNo, dayORhostel } = action.payload;
      state.userId = _id;
      state.userName = name;
      state.userEmail = email;
      state.userRegNo = regNo;
      state.userDayORHostel = dayORhostel;
    },
    logoutUser(state) {
      state.isLoggedIn = false;
      state.userId = "";
    },
  },
});

export default UserSlice.reducer;
export const { loginUser, logoutUser } = UserSlice.actions;
