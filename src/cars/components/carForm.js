import { useDispatch, useSelector } from "react-redux"
import {changeName,changeCost , addCar} from '../store'
export const CarForm = () =>{
    const {name, cost} = useSelector(state=>state.form)
    const dispatch = useDispatch()
    const nameChangeHandler = (event) =>{
        dispatch(changeName(event.target.value))
    }
    const costChangeHandler = (event) =>{
        const cost = parseInt(event.target.value) || 0
        dispatch(changeCost(cost))
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        dispatch(addCar({name,cost}))
    }
    
    const newLocal = "button is-link"
    return <div className="car-form panel">
        <h4 className="subtitle is-3">Add Car</h4>
        <form onSubmit={handleSubmit}>
            <div className="field-group">
                <div className="field">
                    <label className="label">Name</label>
                    <input 
                    className="input is-expanded"
                    value={name}
                    onChange = {nameChangeHandler}
                    />
                </div>
                <div className="field">
                    <label className="label">Cost</label>
                    <input 
                    className="input is-expanded"
                    value={cost || ""}
                    type ="number"
                    onChange = {costChangeHandler}
                    />
                </div>
                <div>
                    <button className={newLocal}>Submit</button>
                </div>
            </div>
        </form>
    </div>
}