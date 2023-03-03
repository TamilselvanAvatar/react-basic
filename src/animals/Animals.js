import React, { useState } from 'react';
import AnimalShow from './AnimalShow'
import './Animal.css'

const animals = ['bird', 'cow', 'cat', 'dog', 'gator', 'horse'];

const Animal = () => {
    const [animal, setAnimal] = useState([]);

    const handleClick = () => {
        setAnimal([...animal, animals[Math.floor(Math.random()*animals.length)]])
    }

    const renderAnimals = animal.map((el,index) => {
        return <AnimalShow type={el} key={index} />
    })

    return (
        <div className='app'>
            <button onClick={handleClick}>Add Animal</button>
            <div className='animal-list'>
                {renderAnimals}
            </div>
        </div>
    )
}

export default Animal;
