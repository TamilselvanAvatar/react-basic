import React from 'react'
import Accordion from '../components/accordion'

const AccordionPage = () => {
    const items = [
        { label: "Can I use React in a project ", content: "Yes You can use as a library" }
        , { label: "Can I use Angular in a project ", content: "Yes You can use as a framework" }
        , { label: "Can I use Java in a project ", content: "Yes You can use as a Server Side" }
    ]
    return (
        <>
            <Accordion items = {items}/>
        </>
    )
}

export default AccordionPage