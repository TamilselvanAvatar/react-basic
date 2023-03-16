import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { faker } from '@faker-js/faker'
//DEV ONLY
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration)
    })
}
const albumApi = createApi({
    reducerPath: "albums",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3002",
        fetchFn: async (...args) => {
            await pause(1000)
            return fetch(...args)
        }
    }),
    endpoints(builder) {
        return {
            removeAlbum: builder.mutation({
                invalidatesTags: (result, error, album) => {
                    return [{ type: "Album", id: album.id }]
                    //in genral user refer arg
                    //When we add Album , Below thing will execute "fetchAlbum" key
                },
                query: (album) => {
                    return {
                        url: `/albums/${album.id}`,
                        method: 'DELETE'
                    }
                }
            }),
            addAlbum: builder.mutation({
                invalidatesTags: (result, error, user) => {
                    return [{ type: "UserAlbum", id: user.id }]
                    //in genral user refer arg
                    //When we add Album , Below thing will execute "fetchAlbum" key
                },
                query: (user) => {
                    return {
                        url: "/albums",
                        body: { userId: user.id, title: faker.commerce.productName() },
                        method: "POST"
                    }
                }
            }),
            fetchAlbums: builder.query({
                providesTags: (result, error, user) => {
                    const tags = result.map(album => {
                        return { type: "Album", id: album.id }
                    })
                    tags.push({ type: "UserAlbum", id: user.id })
                    return tags
                    // in genral 'user' refer arg
                    //This is included for refetch the Album when we a new Album
                },
                query: (user) => {
                    return {
                        url: "/albums",
                        params: { userId: user.id },
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
    useFetchAlbumsQuery,
    useAddAlbumMutation,
    useRemoveAlbumMutation
} = albumApi
export { albumApi }