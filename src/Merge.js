import React, { useState } from 'react';
import { ImSpinner10 } from 'react-icons/im'
import projectinfo from './projectinfo'

const style = {
    display: "flex",
    margin: "2px",
    boxShadow: "1px 0.5px 1px",
    border: "1px solid gray",
    bordeRadius: "12px",
    backgroundColor: "aliceblue",
    filter: "blur()",
    cursor: "pointer",
    flexDirection: "column",
}

export default function Merge() {
    const [component, setComponent] = useState(null)
    const onClickHandler = (element) => {
        const com = <React.Suspense fallback={<ImSpinner10 />}>
            {element.component}
        </React.Suspense>
        setComponent(com)
        window.history.pushState({},"","/next")
    }
    const renderComponent = projectinfo.map((el, i) => {
        return (<div style={style} key={i} onClick={() => onClickHandler(el)}>
            <h4 style={{textAlign: "center"}}>{el.name}</h4>
            <p style={{padding:"5px"}}>
                {el.description}
            </p>
        </div>)
    })
    return <>{component || renderComponent}</>

}