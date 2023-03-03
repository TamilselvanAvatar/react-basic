import { createSlice } from '@reduxjs/toolkit'
import {reset} from '../actions'
const movie = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie: (state, action) => {
            // return [...state, action.payload]
            // immer defaultly here
            state.push(action.payload)
        },
        removeMovie: (state, action) => {
            const index = state.indexOf(action.payload)
            state.splice(index, 1)
        }
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => [])
    }
})

export default movie