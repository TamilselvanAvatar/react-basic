import {useContext} from 'react';
import BookContext from '../context/Books';
const useBookContext = () =>{
    return useContext(BookContext)
}

export {useBookContext};