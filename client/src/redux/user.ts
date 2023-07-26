import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "files",
  initialState: {
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
    isLogIn: false,
  },
  reducers: {
    setUserData: (state, action) => {
      state = action.payload;
    },
  },
});

export const userActions = userSlice.actions
