import React, { useEffect, useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';
import './Books.css'

const Books = ()=>{
    const [books,setBooks] = useState([]);
    const url = "http://localhost:3001/books/";
    const fetchData =async () =>{
        const response = await axios.get("http://localhost:3001/books");
        setBooks([...response.data])
    }

    useEffect(()=>{
        fetchData();
    },[])

    const deleteBookById = id =>{
        //Just execute axios and re-render the component;
        axios.delete(url+id).then(()=>{
            fetchData();
        })
        // Can modify the below code to work as same
        //setBooks([...books.filter(el=>el.id !== id)])
    }

    const saveBook = (title,id) =>{
        axios.put(url+id,{title:title}).then(()=>{
            fetchData();
        })
        // Can modify the below code to work as same
        // setBooks([...books.map(book=>{
        //     if(book.id === id){
        //         return {...book, title:title}
        //     }
        //     return book
        // })])
    }

    const handleCreateBook = (title) =>{
        axios.post(url,{title}).then(()=>{
            fetchData();
        })
        // Can modify the below code to work as same
        //setBooks([...books, new BooksClass(Math.round(Math.random()*999),title)])
    }
    return <div>
        <BookList books={books} onDelete = {deleteBookById} onEdit={saveBook} />
        <BookCreate onBookCreate={handleCreateBook}/>
    </div>
}
export default Books;