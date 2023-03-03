import {configureStore} from '@reduxjs/toolkit'
import movie from './slices/movieSlice'
import song from './slices/songSlice'

const store = configureStore({
  reducer : {
    // Action will flow through the all combined reducers
    songs : song.reducer,
    movies : movie.reducer
  }
})

// We get Dispatch function which is available in store - can get using 'useDispatch'
// we can access the state using 'useSelector' hook
console.log({store });

export {store}








