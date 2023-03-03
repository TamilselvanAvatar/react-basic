import {createAction} from '@reduxjs/toolkit'
import movie from './slices/movieSlice'
import song from './slices/songSlice'

// Exporting action creators
export const reset = createAction("app/reset")
export const {addSong,removeSong} = song.actions
export const {addMovie,removeMovie} = movie.actions 

console.log(reset.toString())