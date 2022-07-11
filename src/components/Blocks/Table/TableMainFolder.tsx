import {FC} from 'react'
import TableCell from './TableCell'
import TableStore from '../../../store/TableStore'
import Table from '../../UI/Table/Table'

const TableMainFolder: FC = () => {
  return (
    <Table>
      {
        TableStore.tableCellsAll.map(cell => <TableCell item={cell} key={cell.id}/>)
      }
    </Table>
  )
}

export default TableMainFolder