import React from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import { Provider } from './context/Books';
import './Books.css'

const Books = () => {
    return (
        <Provider>
            <BookList />
            <BookCreate />
        </Provider>
    );
}
export default Books;