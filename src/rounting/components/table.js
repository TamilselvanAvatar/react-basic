import { Fragment } from "react"

const Table = ({ data, config, keyFn }) => {
    const renderHeader = config.map(colunm => {
        if (colunm.header) {
            return <Fragment key={colunm.label}>{colunm.header()}</Fragment>
        }
        return <th key={colunm.label} >{colunm.label}</th>
    })
    const renderCells = data.map(row => {
        const renderedRow = config.map(colunm => {
            return <td key={colunm.label} className="p-3">{colunm.render(row)}</td>
        })
        return <tr className="border-b-2" key={keyFn(row)}>
            {renderedRow}
        </tr>
    })
    return <table className="table-auto border-spacing-2">
        <thead>
            <tr className="border-b-2">
                {renderHeader}
            </tr>
        </thead>
        <tbody>
            {renderCells}
        </tbody>
    </table>
}

export default Table