import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from './slices/usersSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { albumApi } from "./apis/albumApi";
import { photoApi } from "./apis/photoApi";

const store = configureStore({
    reducer: {
        users: userReducer,
        [albumApi.reducerPath]: albumApi.reducer,
        [photoApi.reducerPath] : photoApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(albumApi.middleware)
            .concat(photoApi.middleware)
    }
})
setupListeners(store.dispatch)
export default store
export * from './thunks/fetchUsers'
export * from './thunks/addUser'
export * from './thunks/deleteUser'
export { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } from './apis/albumApi'
export { useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation } from './apis/photoApi'