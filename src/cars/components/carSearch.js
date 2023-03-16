import { useDispatch, useSelector } from "react-redux"
import { changeSearchTerm } from "../store"
export const CarSearch = () =>{
    const dispatch  = useDispatch()
    const {searchTerm} = useSelector(state=>state.car)
    const termChangeHandler = (event) =>{
        dispatch(changeSearchTerm(event.target.value))
    }
    return <div className="list-header">
        <h4 className="title is-3">My Cars</h4>
        <div className="search field is-horizontal">
            <label className="label">Search</label>
            <input className="input" value={searchTerm} onChange={termChangeHandler}/>
        </div>
    </div>
}