import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const removeUser = createAsyncThunk('user/remove',async (user)=>{
    // Delete Request return empty Object
    await axios.delete("http://localhost:3002/users/"+user.id)
    return user
})

export {removeUser}