import React, { useState } from 'react';
import BookEdit from './BookEdit';
const BookShow = ({book,onDelete, onEdit})=>{
    const [showEdit,setShowEdit] = useState(false)
    let content = <h3>{book.title}</h3>

    const handleOnSubmit = (title,id) =>{
        onEdit(title,id)
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
            <button className='delete' onClick={_=>{onDelete(book.id)}}>Delete</button>
        </div>
    </div>)
}
export default BookShow;