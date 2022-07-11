import React, {FC, ReactNode} from 'react'
import TableStore from '../../../store/TableStore'
import TableHeader from '../../Blocks/Table/TableHeader'

interface TableProps {
  children: ReactNode
}

const Table: FC<TableProps> = (props) => {
  return (
    <table className="table container">
      <thead>
      <tr>
        {
          TableStore.tableHeaders.map(header => <TableHeader item={header} key={header.id}/>)
        }
      </tr>
      </thead>
      <tbody>
      {props.children}
      </tbody>
    </table>
  )
}

export default Table