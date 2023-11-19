import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "User",
  initialState: "",
  reducers: {
    newUser(state, action) {
      return action.payload;
    },
    deleteUser(state, action) {
      return "";
    },
  },
});

export default UserSlice.reducer;
export const { newUser, deleteUser } = UserSlice.actions;
