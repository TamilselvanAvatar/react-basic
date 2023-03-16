import { useCallback, useState } from "react"
import { useDispatch } from "react-redux"
const useThunk = (thunk) => {
    const [isLoading, setIsLoading] = useState(false)
    const [eror, setError] = useState(null)
    const dispatch = useDispatch()

    const runThunk = useCallback((arg) => {
        setIsLoading(true)
        //Even though the 'dispatch' return promise
        //Not work as expected 
        //Taht's why we use 'unwrap()' - return promise that works in conventional way
        dispatch(thunk(arg))
            .unwrap()
            .catch((err) => {
                setError(err)
            })
            .finally(() => { setIsLoading(false) })
    }, [dispatch, thunk])

    return [runThunk, isLoading, eror]
}

export default useThunk