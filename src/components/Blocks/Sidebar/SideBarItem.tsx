import {FC} from 'react'
import ISidebar from '../../../types/ISidebar'

interface SideBarItemProps {
  item: ISidebar
}

const SideBarItem: FC<SideBarItemProps> = ({item}) => {
  return (
    <li className="sidebar-item">
      <a className="sidebar-item__title" href="#">
        {item.title}
      </a>
    </li>
  )
}

export default SideBarItem