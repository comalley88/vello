import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value:  '',
  }

export const dateSlice = createSlice({
    name: 'endDate',
    initialState,
    reducers: {
        endDate: (state, action) => {

            state.value = action.payload
        }
    }

})

console.log(endDate)

export const {endDate} = dateSlice.actions

export default dateSlice.reducer