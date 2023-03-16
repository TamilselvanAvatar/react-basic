import { configureStore } from "@reduxjs/toolkit";
import {car} from './slices/carsSlice'
import {form} from './slices/formSlice'

const store = configureStore({
    reducer : {
        form : form.reducer,
        car : car.reducer
    }
})

export default store
export const {changeName,changeCost} = form.actions
export const {addCar, removeCar, changeSearchTerm} = car.actions