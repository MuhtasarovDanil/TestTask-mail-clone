import {FC} from 'react'
import IFolder from '../../../types/IFolder'

interface SideBarItemProps {
  item: IFolder
}

const SideBarItem: FC<SideBarItemProps> = (props) => {
  return (
    <li className="sidebar-item">
      <a className="sidebar-item__title" href="#">
        {props.item.title}
      </a>
    </li>
  )
}

export default SideBarItem