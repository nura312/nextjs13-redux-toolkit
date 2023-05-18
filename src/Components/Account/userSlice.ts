import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    listUser: [],
  },
  reducers: {
    setListUser: (state, action) => {
      state.listUser = action.payload;
    },
  },
});

export const { setListUser } = userSlice.actions;
export const selectUserState = (state: any) => state.user.listUser;
export default userSlice.reducer;
