import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "files",
  initialState: {
    name: "",
    email: "",
    surname: "",
    phoneNumber: "",
    token: localStorage.getItem("token"),
  },
  reducers: {
    setUserData: (_, action) => {
      console.log(action.payload);
      return action.payload;
    },
    
    cleanUpUserData: () => {
      return {
        name: "",
        email: "",
        surname: "",
        phoneNumber: "",
        token: "",
      };
    },
  },
});

export const userActions = userSlice.actions;
