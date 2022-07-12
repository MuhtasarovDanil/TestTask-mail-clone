import {ReactNode} from 'react'
import {observer} from 'mobx-react-lite'
import {Link} from 'react-router-dom'

interface ListProps<T> {
  items: T[]
  renderItem: (item: T) => ReactNode
}

export default observer(function List<T>(props: ListProps<T>) {
  return (
    <ul>
      <li>
        <Link to='/' className="sidebar-item__title m-20">Все сообщения</Link>
      </li>
      {props.items.map(props.renderItem)}
    </ul>
  )
})
