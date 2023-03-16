import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { faker } from '@faker-js/faker'
//DEV ONLY
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration)
    })
}
const photoApi = createApi({
    reducerPath: "photos",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3002",
        fetchFn: async (...args) => {
            await pause(1000)
            return fetch(...args)
        }
    }),
    endpoints(builder) {
        return {
            removePhoto: builder.mutation({
                invalidatesTags: (result, error, Photo) => {
                    return [{ type: "Photo", id: Photo.id }]
                    //in genral user refer arg
                    //When we add Photo , Below thing will execute "fetchPhoto" key
                },
                query: (photo) => {
                    return {
                        url: `/photos/${photo.id}`,
                        method: 'DELETE'
                    }
                }
            }),
            addPhoto: builder.mutation({
                invalidatesTags: (result, error, album) => {
                    return [{ type: "AlbumPhoto", id: album.id }]
                    //in genral user refer arg
                    //When we add Photo , Below thing will execute "fetchPhoto" key
                },
                query: (album) => {
                    return {
                        url: "/photos",
                        body: { albumId: album.id, url : faker.image.abstract(150,150,true) },
                        method: "POST"
                    }
                }
            }),
            fetchPhotos: builder.query({
                providesTags: (result, error, album) => {
                    const tags = result.map(photo => {
                        return { type: "Photo", id: photo.id }
                    })
                    tags.push({ type: "AlbumPhoto", id: album.id })
                    return tags
                    // in genral 'user' refer arg
                    //This is included for refetch the Photo when we a new Photo
                },
                query: (album) => {
                    return {
                        url: "/photos",
                        params: { albumId: album.id },
                        method: "GET"
                    }
                }
            })
        }
    }
})
// State are automatically create Slice and then add to Origial state
// The Hook is automatically created
// And Appended with Query or Mutation
export const {
    useFetchPhotosQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation
} = photoApi
export { photoApi }