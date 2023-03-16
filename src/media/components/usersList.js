import { useEffect } from "react"
import { useSelector } from "react-redux"
import { fetchUsers } from "../store"
import { addUser } from "../store"
import Skeleton from "./Skeleton"
import Button from './button'
import useThunk from '../hooks/useThunk'
import { UserItems } from "./userItems"

export default function UserList() {
    const { data } = useSelector(state => state.users)
    const [doFetchUsers, isUserLoading, erorUserLoading] = useThunk(fetchUsers)
    const [doAddUser, isUserCreate, errorUserCreate] = useThunk(addUser)

    useEffect(() => {
        doFetchUsers()
    }, [doFetchUsers])

    const handleUserAdd = () => {
        doAddUser()
    }

    let content;
    if (isUserLoading) {
        content = <Skeleton times={6} className="h-10 w-full" />
    }
    else if (erorUserLoading) {
        content = <div>Error</div>
    }
    else {
        content = data.map(user => {
            return <UserItems key={user.id} user={user}/>
        })
    }
    return <div>
        <div className="flex flex-row justify-between m-3">
            <h1 className="m-2 text-xl">Users</h1>
            <Button onClick={handleUserAdd} loading={isUserCreate} primary rounded>+ Add User</Button>
            {errorUserCreate && "error"}
        </div>
        {content}
    </div>
}