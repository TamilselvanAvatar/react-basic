import React from 'react';
import BookShow from './BookShow';
const BookList = ({books, onDelete, onEdit})=>{
    const renderdeBooks = books.map(book=>{
        return <BookShow book = {book} key={book.id} onDelete = {onDelete}  onEdit ={onEdit} />
    })
    return <div className='book-list'>{renderdeBooks}</div>
}
export default BookList;