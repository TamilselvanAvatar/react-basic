import {GoBell} from 'react-icons/go'
import React from 'react';
import Button from '../components/button'
function ButtonPage(props){
    return <>
    <Button primary rounded ><GoBell/>Click Me</Button>
    <Button secondary rounded ><GoBell/>Click Me</Button>
    </>
}

export default ButtonPage;