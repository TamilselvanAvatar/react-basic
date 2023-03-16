import { useAddAlbumMutation, useFetchAlbumsQuery } from "../store"
import Skeleton from "./Skeleton"
import Button from "./button"
import AlbumListItem from "./albumListItem"

export default function AlbumList({ user }) {
    const { data, error, isFetching } = useFetchAlbumsQuery(user)
    const [addAlbum, result] = useAddAlbumMutation()
    const handleClick = () => {
        addAlbum(user)
    }
    let content
    // isFetching -> run for each request
    // isLoading -> run for first request
    if (isFetching) {
        content = <Skeleton className="h-10 w-full" times={2} />
    }
    else if (error) {
        content = <div>Error Loading Albums.</div>
    }
    else {
        content = data.map(album => {
           return <AlbumListItem  key={album.id} album={album}/>
        })
    }
    return (<>
        <div className="m-2 flex flex-row justify-between items-center">
            <h3 className="text-lg font-bold">Album for {user.name}</h3>    
            <Button loading={result.isFetching} onClick={handleClick} rounded >+ Add Albums</Button>
        </div>
        <div>{content}</div>
    </>)
}