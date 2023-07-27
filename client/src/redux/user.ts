import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'files',
  initialState: {
    id: '',
    name: '',
    email: '',
    surname: '',
    phoneNumber: '',
    token: localStorage.getItem('token'),
  },
  reducers: {
    setUserData: (_, action) => {
      return action.payload
    },

    cleanUpUserData: () => {
      return {
        id: '',
        name: '',
        email: '',
        surname: '',
        phoneNumber: '',
        token: '',
      }
    },
  },
})

export const userActions = userSlice.actions
