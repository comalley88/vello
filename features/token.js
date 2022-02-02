import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value:  '',
  }

export const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        userToken: (state, action) => {

            state.value = action.payload
        }
    }

})

console.log(userToken)

export const {userToken} = tokenSlice.actions

export default tokenSlice.reducer