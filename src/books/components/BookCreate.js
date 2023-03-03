import React, { useState } from 'react';
const BookCreate = ({ onBookCreate }) => {
    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleClick = e => { 
        e.preventDefault();
        onBookCreate(title);
        setTitle('');
    }

    return (
    <div className="book-create">
        <h3>Add Book</h3>
        <form>
            <label>Enter Title </label>
            <input className="input" value={title} onChange={handleChange} />
            <button className="button" onClick={handleClick}>Submit</button>
        </form>
    </div>);
}
export default BookCreate;