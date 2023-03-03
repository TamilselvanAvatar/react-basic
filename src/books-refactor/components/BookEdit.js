import React, { useState} from 'react';
const BookEdit = ({book , onSubmit}) => {
    const [title, setTitle] = useState(book.title);

    const handleOnChange = e => {
        setTitle(e.target.value)
    }

    const handleOnClick = e => {
        e.preventDefault();
        onSubmit(title, book.id);
    }

    return (
        <form className='book-edit'>
            <label>Title</label>
            <input className='input' value={title} onChange={handleOnChange} />
            <button className='button is-primary' onClick={handleOnClick}>Save</button>
        </form>);
}
export default BookEdit;