import { useFetchPhotosQuery,useAddPhotoMutation } from "../store"
import Skeleton from "./Skeleton"
import Button from "./button"
import PhotoListItem from "./photoListItem"

export default function PhotoList({ album }) {
    const { data, error, isFetching } = useFetchPhotosQuery(album)
    const [addPhoto, result] = useAddPhotoMutation()
    const handleClick = () => {
        addPhoto(album)
    }
    let content
    // isFetching -> run for each request
    // isLoading -> run for first request
    if (isFetching) {
        content = <Skeleton className="h-10 w-full" times={2} />
    }
    else if (error) {
        content = <div>Error Loading Photos.</div>
    }
    else {
        content = data.map(photo => {
           return <PhotoListItem  key={photo.id} photo={photo}/>
        })
    }
    return (<>
        <div className="m-2 flex flex-row justify-between items-center">
            <h3 className="text-lg font-bold">Photo in {album.title}</h3>    
            <Button loading={result.isFetching} onClick={handleClick} rounded >+ Add Photos</Button>
        </div>
        <div className="mx-8 flex flex-row flex-wrap items-center">{content}</div>
    </>)
}