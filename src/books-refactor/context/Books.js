import React, {createContext, useEffect, useState,useCallback} from 'react';
import axios from 'axios';
const BookContext = createContext();

const Provider = ({children}) =>{
    const [books,setBooks] = useState([]);

    const url = "http://localhost:3001/books/";
    const fetchData = useCallback(async () =>{
        const response = await axios.get(url);
        setBooks([...books,...response.data])
    },[])

    useEffect(()=>{fetchData()},[fetchData])

    const deleteBookById = async (id) =>{
        const _ = await axios.delete(url+id);
        setBooks([...books.filter(el=>el.id !== id)])
    }

    const updateBookById = async (title,id) =>{
        const res = await axios.put(url+id,{title:title});
        setBooks([...books.map(book=>{
            if(book.id === id){
                return {...book, ...res.data};
            }
            return book;
        })])
    }

    const createBook = async (title) =>{
        const res = await axios.post(url,{title:title});
        setBooks([...books,res.data ])
    }

    const valueToshare = {
        books,
        createBook,
        deleteBookById,
        fetchData,
        updateBookById
    }

    return (
        <BookContext.Provider value={valueToshare}>
            {children}
        </BookContext.Provider>
    )
}

export {Provider};
export default BookContext;