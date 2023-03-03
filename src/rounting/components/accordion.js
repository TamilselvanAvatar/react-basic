import { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

function Accordion({ items }) {
    const [expanded, setExpanded] = useState()
    const renderImages = items.map((e, i) => {
        const isExpanded = (expanded === i)
        const span = <span className="text-2xl cursor-pointer" onClick={() => { !isExpanded ? setExpanded(i) : setExpanded("") }} >{isExpanded ? <GoChevronDown /> : <GoChevronRight />}</span>
        return <div key={i} >
            <div className="flex p-3 border-b bg-gray-50 items-center" >{span} {e.label} </div>
            {isExpanded && <div className="border-b p-5">{e.content} </div>}
        </div>
    })
    return <div>{renderImages}</div>
}

export default Accordion;