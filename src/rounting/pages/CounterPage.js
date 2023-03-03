import { useReducer } from "react"
import produce from 'immer'
import Button from '../components/button'
import Panel from "../components/panel"
const INCREMENT_COUNT = 'increment-count'
const DECREMENT_COUNT = 'decrement-count'
const CHANGE_VALUE = 'change-value'
const ADD_VALUE = 'add-value'

// Using immer , we can mutatethe state directly
const reducer = (state, action) => {
    if (action.type === INCREMENT_COUNT) {
        // return { ...state, count: state.count + 1 }
        state.count = state.count + 1
        return;
    }
    if (action.type === DECREMENT_COUNT) {
        // return { ...state, count: state.count - 1 }
        state.count = state.count - 1
        return;

    }
    if (action.type === CHANGE_VALUE) {
        // return { ...state, value: action.payload }
        state.value = action.payload
        return;
    }
    if (action.type === ADD_VALUE) {
        // return { ...state, count: state.value + state.count, value: 0 }
        state.count = state.count + state.value
        state.value = 0
        return;
    }
    // return state
    return;
}
const CounterPage = ({ initialCount }) => {
    // const [count, setCount] = useState(initialCount)
    // const [value,setValue]  = useState(0)
    // Refactor using useReducer
    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        value: 0
    })
    console.log(state);
    const increment = (event) => {
        dispatch({ type: INCREMENT_COUNT })
    }
    const decrement = (event) => {
        dispatch({ type: DECREMENT_COUNT })
    }

    const onChangeHandler = (event) => {
        const v = parseInt(event.target.value) || 0
        dispatch({ type: CHANGE_VALUE, payload: v })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch({ type: ADD_VALUE })
    }
    return (
        <Panel className="m-3">
            <h1 className="text-lg">Count value : {state.count}</h1>
            <div className="flex flex-row">
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Add Lot</label>
                <input type="number" value={state.value || ""} onChange={onChangeHandler} className="p-1 m-3 bg-gray-50 border border-gray-300" />
                <Button rounded outlined>Add It</Button>
            </form>
        </Panel>)
}

export default CounterPage