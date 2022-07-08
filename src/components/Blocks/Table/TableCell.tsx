import {FC} from 'react'
import {IMessage} from '../../../types/IMessage'

interface TableCellProps {
  item: IMessage
}

const TableCell: FC<TableCellProps> = (props) => {
  return (
    <tr className="table-cell">
      <td className="table-column">
        <input className='table__checkbox' type="checkbox"/>
        <p className="table__text table__text--first">
          {props.item.author}
        </p>
      </td>
      <td className="table-column">
        <p className="table__text">
          {props.item.message}
        </p>
      </td>
      <td className="table-column">
        <p className="table__date">
          {props.item.date}
        </p>
      </td>
    </tr>
  )
}

export default TableCell