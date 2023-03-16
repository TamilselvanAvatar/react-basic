import {createSlice, nanoid} from '@reduxjs/toolkit'

export const car = createSlice({
    name : 'name',
    initialState : {
        searchTerm : '',
        cars : []
    },
    reducers : {
        changeSearchTerm(state,action){
            state.searchTerm = action.payload
        },
        addCar(state,action){
            state.cars.push(
                {
                    name : action.payload.name,
                    cost : action.payload.cost,
                    id : nanoid()
                }
            )
        },
        removeCar(state,action){
            const updatedCars = state.cars.filter(car => car.id !== action.payload)
            state.cars = updatedCars
        }
    }
})