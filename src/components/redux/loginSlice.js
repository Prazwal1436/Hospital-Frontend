import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: false,
  email:"",
  name:""

}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state) => {
        state.status =  true
        
      },
      logout: (state) => {
        state.status =  false
      },
  },
})

// Action creators are generated for each case reducer function
export const {login,logout} = loginSlice.actions

export default loginSlice.reducer
