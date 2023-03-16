import ExpandablePanel from "./expandablePanel"
import { useRemoveAlbumMutation } from "../store"
import Button from "./button"
import { IoMdCloseCircleOutline } from 'react-icons/io'
import PhotoList from "./photoList"

export default function AlbumListItem({ album }) {
    const [removeAlbum, result] = useRemoveAlbumMutation()
    const handleClick = () => {
        removeAlbum(album)
    }
    const header = <>
        <Button className="mr-3" loading={result.isLoading} rounded onClick={handleClick}>
            <IoMdCloseCircleOutline className="text-amber-800 text-lg" />
        </Button>
        {album.title}
    </>
    return (
        <ExpandablePanel key={album.id} header={header}><PhotoList album={album} /></ExpandablePanel>
    )
}