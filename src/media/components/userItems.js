import { removeUser } from "../store"
import useThunk from "../hooks/useThunk"
import Button from "./button"
import { GoTrashcan } from "react-icons/go"
import ExpandablePanel from "./expandablePanel"
import AlbumList from "./albumList"
export function UserItems({ user }) {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser)
    const handleClick = () => {
        doRemoveUser(user)
    }
    const header = <>
        <Button className="mr-3" loading={isLoading} onClick={handleClick}>
            <GoTrashcan />
        </Button>
        {user.name }
        {error && <div>Error..</div>}
    </>
    return <ExpandablePanel header={header} ><AlbumList user={user}/></ExpandablePanel>
}