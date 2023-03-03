import Table from "./table";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";
import useSort from "../hooks/useSort";
function SortableTable(props) {
    const { config, data } = props;
    const [sortBy, sortOrder, sortData, handleHeaderClick] = useSort(data, config)

    const updatedConfig = config.map(colunm => {
        if (!colunm.sortValue) {
            return colunm
        }
        return {
            ...colunm, header: () => {
                return (<th className="hover:bg-gray-400" onClick={() => handleHeaderClick(colunm.label)}>
                    <div className="flex items-center">
                        {getIcons(colunm.label, sortBy, sortOrder)}
                        {colunm.label}
                    </div>
                </th>)
            }
        }
    })
    return <Table {...props} config={updatedConfig} data={sortData} />
}

function getIcons(label, sortBy, order) {
    const def = <div> <GoArrowSmallUp />  <GoArrowSmallDown /> </div>
    if (label !== sortBy) {
        return def
    }
    return order === null ? def : (order === 'asc' ? <div><GoArrowSmallDown /></div> : <div> <GoArrowSmallUp /> </div>)
}

export default SortableTable