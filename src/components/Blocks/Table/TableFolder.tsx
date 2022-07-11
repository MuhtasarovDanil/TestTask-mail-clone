import {FC} from 'react'
import Table from '../../UI/Table/Table'
import TableStore from '../../../store/TableStore'
import TableCell from './TableCell'
import {observer} from 'mobx-react-lite'

interface TableFolderProps {
  folderId?: number
}

const TableFolder: FC<TableFolderProps> = observer(() => {
  return (
    <Table>
      {
        TableStore.currentFolder.map(folder => <TableCell item={folder}/>)
      }
    </Table>
  )
})

export default TableFolder