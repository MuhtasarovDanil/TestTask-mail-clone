import {ReactNode} from 'react'
import {observer} from 'mobx-react-lite'

interface ListProps<T> {
  items: T[]
  renderItem: (item: T) => ReactNode
}

export default observer(function List<T>(props: ListProps<T>) {
  return (
    <ul>
      {props.items.map(props.renderItem)}
    </ul>
  )
})
