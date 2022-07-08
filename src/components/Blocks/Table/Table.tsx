import {FC} from 'react'
import TableHeader from './TableHeader'
import TableCell from './TableCell'
import TableStore from '../../../store/TableStore'

const Table: FC = () => {
  return (
    <div className="container">
      <table className="table">
        <thead>
          {TableStore.tableHeaders.map(header => <TableHeader item={header}/>)}
        </thead>
        <tbody>
          {TableStore.tableCells.map(cell => <TableCell item={cell}/>)}
        </tbody>
      </table>
    </div>
  )
}

export default Table