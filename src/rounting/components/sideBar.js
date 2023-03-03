import React from 'react'
import Link from './link'
const SideBar = ({ to, children }) => {
    const links = [
        {label:"Accordion" , to : "/"},
        {label:"Drop Down" , to : "/dropdown"},
        {label:"Buttons" , to : "/buttons"},
        {label:"Modal" , to : "/modal"},
        {label:"Table" , to : "/table"},
        {label:"Counter" , to : "/counter"},
    ]
    const renderLinks = links.map(link=>{
        return <Link key={link.label} to={link.to} className="mb-3" activeLink={'font-bold border-l-4 border-blue-500 pl-2'}>{link.label}</Link>
    })

    return <div className='sticky top-0 overflow-y-scroll flex flex-col items-start'>{renderLinks}</div>
}

export default SideBar