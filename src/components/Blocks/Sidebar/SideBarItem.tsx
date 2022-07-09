import {FC} from 'react'
import IFolder from '../../../types/IFolder'
import FolderStore from '../../../store/FolderStore'

interface SideBarItemProps {
  item: IFolder
}

const SideBarItem: FC<SideBarItemProps> = (props) => {
  return (
    <li className="sidebar-item">
      <a className="sidebar-item__title" href="#">
        {props.item.title}
      </a>
      {props.item.isCustom &&
          <>
            <img
              src="../images/trash-bin.svg"
              alt="Delete"
              className="sidebar__icon"
              onClick={() => FolderStore.deleteFolder(props.item.id)}
            />
            <img
              src="../images/edit.svg"
              alt="Edit"
              className="sidebar__icon"
            />
          </>
      }
    </li>
  )
}

export default SideBarItem