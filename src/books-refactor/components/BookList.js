import React from 'react';
import {useBookContext} from '../hooks/useBookContext'
import BookShow from './BookShow';
const BookList = ()=>{
    const {books} = useBookContext();
    const renderdeBooks = books.map(book=>{
        return <BookShow  key={book.id} book={book} />
    })
    return <div className='book-list'>{renderdeBooks}</div>
}
export default BookList;