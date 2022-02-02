import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value:  '',
  }

export const dateSlice = createSlice({
    name: 'date',
    initialState,
    reducers: {
        startDate: (state, action) => {

            state.value = action.payload
        }
    }

})

console.log(startDate)

export const {startDate} = dateSlice.actions

export default dateSlice.reducer