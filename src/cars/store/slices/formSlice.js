import {createSlice} from '@reduxjs/toolkit'
import {car} from './carsSlice'
export const form = createSlice({
    name : 'form',
    initialState : {
        name : '',
        cost : 0
    },
    reducers : {
        changeName(state,action){
            state.name = action.payload
        },
        changeCost(state,action){
            state.cost = action.payload
        }
    },
    extraReducers(builder){
        builder.addCase(car.actions.addCar,(state,action)=>{
            return {name : '' , cost : ''}
        })
    }
})