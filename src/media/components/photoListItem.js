import { GoTrashcan } from "react-icons/go"
import { useRemovePhotoMutation } from "../store"
export default function PhotoListItem({ photo }) {
    const [removePhoto, result] = useRemovePhotoMutation()
    const handleClick = () => {
        removePhoto(photo)
    }

    return <div className="relative cursor-pointer m-2" onClick={handleClick}>
        <img  alt="random pic" src={photo.url} />
        <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
            <GoTrashcan className="text-3xl" />
        </div>
    </div>
}