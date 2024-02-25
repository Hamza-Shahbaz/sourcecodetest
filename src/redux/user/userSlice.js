import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: 'M Rameez',
    position: 'Senior',
    reportsTo: ['Zain Shaikh', 'Faisal', 'Ramsha']
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeName(state, action) {
            state.username = action.payload
        }
    }
})

export default userSlice.reducer;
export const {changeName} = userSlice.actions
