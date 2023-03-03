import {createSlice} from '@reduxjs/toolkit'
import {reset} from '../actions'
const song = createSlice({
    name : 'song',
    initialState : [],
    reducers : {
      addSong : (state, action) =>{
      // return [...state, action.payload]
      // immer defaultly here
      state.push(action.payload)
      },
      removeSong :  (state, action) =>{
          const index = state.indexOf(action.payload)
          state.splice(index,1)
      }
    },
    // Below one will listen 'movie/reset' action -> will update the state based on requirement
    extraReducers(builder){
      builder.addCase(reset, (state,action)=>[])
    }
  })

  export default song