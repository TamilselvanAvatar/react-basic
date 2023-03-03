import React, { useState } from 'react';
import {useBookContext} from '../hooks/useBookContext'
import BookEdit from './BookEdit';

const BookShow = ({book})=>{
    const [showEdit,setShowEdit] = useState(false);
    const {updateBookById,deleteBookById} = useBookContext();
    let content = <h3>{book.title}</h3>

    const handleOnSubmit = (title,id) =>{
        updateBookById(title,id)
        setShowEdit(false)
    }

    if(showEdit){
        content =  <BookEdit book = {book} onSubmit = {handleOnSubmit}  />
    }
    return (
    <div className='book-show'>
        <img alt = "book" src = "https://picsum.photos/300/200" />
        <div>{content}</div>
        <div className='actions'>
            <button className='edit ' onClick={_=>{setShowEdit(!showEdit)}}>Edit</button>
            <button className='delete' onClick={_=>{deleteBookById(book.id)}}>Delete</button>
        </div>
    </div>)
}
export default BookShow;