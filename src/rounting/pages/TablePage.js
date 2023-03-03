import SortableTable from '../components/sortableTable'
const TablePage = () => {
    const data = [
        { name: "Orange", color: "bg-orange-400", score: 5 },
        { name: "Apple", color: "bg-red-400", score: 3 },
        { name: "Mango", color: "bg-yellow-400", score: 2 },
        { name: "Lime", color: "bg-green-400", score: 1 },
        { name: "Watermelon", color: "bg-red-500", score: 4 },
        { name: "Banana", color: "bg-yellow-500", score: 4 },
    ]
    const config = [
        { label: "Fruit", render: fruit => fruit.name, sortValue: fruit => fruit.name },
        { label: "Color", render: fruit => <div className={`p-3 m-2 ${fruit.color}`}></div> },
        { label: "Score", render: fruit => fruit.score, sortValue: fruit => fruit.score },
    ]
    const keyFn = (fruit) => fruit.name
    return <div><SortableTable data={data} config={config} keyFn={keyFn} /></div>
}

export default TablePage