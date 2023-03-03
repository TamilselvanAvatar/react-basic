import { useState } from "react"
const useSort = (data , config)=>{
    const [sortOrder, setSortOrder] = useState(null)
    const [sortBy, setSortBy] = useState(null)
    const setSotColunm = (label) => {
        if(sortBy && label !== sortBy){
            setSortOrder('asc');
            setSortBy(label)
            return ;
        }
        const order = sortOrder === null ? 'asc' : (sortOrder === 'asc' ? 'desc' : null)
        setSortOrder(order)
        setSortBy(label)
    }
    let sortData = data
    if (sortOrder && sortBy) {
        const order = sortOrder === 'asc' ? 1 : -1;
        const colunm = config.find(colunm => colunm.label === sortBy)
        sortData = [...data].sort((a, b) => {
            const av = colunm.sortValue(a)
            const bv = colunm.sortValue(b)
            if (typeof av === 'string' || typeof bv === 'string') {
                return av.localeCompare(bv) * order
            }
            return (av - bv) * order
        })
    }

    return [sortBy, sortOrder, sortData, setSotColunm];
}

export default useSort;