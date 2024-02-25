import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    totPres: {
        name : 'Total Present',
        val : 24
    },
    totAbs: {
        name : 'Absents',
        val : 24
    },
    totLate: {
        name : 'Lates',
        val : 24
    },
    totEarly: {
        name : 'Total Early',
        val : 24
    },
    totHalf: {
        name : 'Half Day',
        val : 24
    },
    totHoliday: {
        name : 'Holiday/offDay',
        val : 24
    },
}

const attSlice = createSlice({
    name:'attandance',
    initialState,
    reducers: {
        changeValue : (state, action) => {
            let value = action.payload.val
            let property = action.payload.attType
            return {...state, property:value}
        }
    }
})

export default attSlice.reducer
export const {changeValue} = attSlice.actions
