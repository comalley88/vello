import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value:  {},
  }

export const coordsSlice = createSlice({
    name: 'coords',
    initialState,
    reducers: {
        placeCoords: (state, action) => {

            state.value = action.payload
        }
    }

})

console.log(placeCoords)

export const {placeCoords} = coordsSlice.actions

export default coordsSlice.reducer