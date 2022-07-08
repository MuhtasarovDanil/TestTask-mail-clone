import {FC} from 'react'
import {ITableHeader} from '../../../types/ITableHeader'

interface TableHeaderProps {
  item: ITableHeader
}

const TableHeader: FC<TableHeaderProps> = (props) => {
  return (
    <th className="table-header">
      {props.item.title}
    </th>
  )
}

export default TableHeader