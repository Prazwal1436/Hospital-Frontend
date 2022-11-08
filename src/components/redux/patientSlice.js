import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id:""

}

export const patientSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {
    patient: (state,value) => {
        state.id =  value.payload;
      },

  },
})

// Action creators are generated for each case reducer function
export const {patient} = patientSlice.actions

export default patientSlice.reducer
