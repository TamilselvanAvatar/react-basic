import { useEffect, useState, useRef, useCallback } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from './panel';
const DropDown = ({ options, onChange, value, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    const caller = useCallback(() =>{ setIsOpen(false)},[])

    useEffect(()=>{
        const handler = (event) =>{
            if( divEl?.current && !divEl.current.contains(event.target)){
               caller();
            }
        }
        document.addEventListener('click',handler,true)
        return ()=>{
            document.removeEventListener('click',handler,true)
        }
    },[caller])

    const renderList = options.map((el, index) => {
        return <div className="hover:bg-sky-200 cursor-pointer p-1 rounded " key={index} onClick={() => {
            onChange(el);
            setIsOpen(isOpen => !isOpen)
        }}>{el.label}</div>
    })
    return <div ref={divEl} className="w-48 relative">
        <Panel className="flex justify-between items-center cursor-pointer " onClick={() => setIsOpen(!isOpen)}>{value || "Select..."} <GoChevronDown className="text-lg" /> </Panel>
        {isOpen && <Panel className="absolute top-full ">{renderList}</Panel>}
    </div>
}

export default DropDown;