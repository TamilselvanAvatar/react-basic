import { useState } from "react";
import DropDown from '../components/dropdown'
function DropDownPage(){
    const [selected, setSelected] = useState(null);
    const handleselected = (option) => {
        setSelected(option.label)
    }
    const items = [
        { label: "Can I get chicken ", value: "meat" }
        , { label: "Can I get idly ", value: "veg" }
        , { label: "Can I get lemon juice", value: "juice" }
    ]
    return (
        <div className="flex">
            <DropDown options={items} value={selected} onChange={handleselected}><div>Hi</div></DropDown>
            <DropDown options={items} value={selected} onChange={handleselected}><div>Hi</div></DropDown>
        </div>
    )
}

export default DropDownPage;