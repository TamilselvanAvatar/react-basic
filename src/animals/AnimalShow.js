import bird from './images/svg/bird.svg';
import cow from './images/svg/cow.svg';
import cat from './images/svg/cat.svg';
import dog from './images/svg/dog.svg';
import gator from './images/svg/gator.svg';
import heart from './images/svg/heart.svg';
import horse from './images/svg/horse.svg';
import { useState } from 'react';

const animals = {
    bird,
    cow,
    cat,
    dog,
    gator,
    horse,
}

const AnimalShow = ({ type }) => {
    const [size,setSize] = useState(0);
    return (
        <div onClick = {()=>{setSize(size+1)}} className='animal'>
            <img className='ianimal' alt="animals" src={animals[type]} />
            <img className='iheart' alt="heart" src={heart} style={{width : 10+ size*2 + 'px'}}/>
        </div>
    )
}

export default AnimalShow;