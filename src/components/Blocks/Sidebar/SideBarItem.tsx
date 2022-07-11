import {FC} from 'react'
import IFolder from '../../../types/IFolder'
import SideBarModalEdit from './SideBarModalEdit'
import ModalStore from '../../../store/ModalStore'
import FolderStore from '../../../store/FolderStore'
import TableStore from '../../../store/TableStore'
import {observer} from 'mobx-react-lite'
import {Link} from 'react-router-dom'

interface SideBarItemProps {
  item: IFolder
}

const SideBarItem: FC<SideBarItemProps> = observer((props) => {
  const openEditModal = () => {
    FolderStore.setIsEdit(props.item.id)
    ModalStore.setEdit()
  }

  return (
    <li className="sidebar-item">
      <Link
        className="sidebar-item__title"
        to={`/folder/:${props.item.id}`}
        onClick={() => TableStore.findTableCellsByFolderId(props.item.id)}
      >
        {props.item.title}
      </Link>
      {
        props.item.isCustom &&
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
                onClick={openEditModal}
            />
            {
              ModalStore.edit &&
                <SideBarModalEdit id={props.item.id}/>
            }
          </>
      }
    </li>
  )
})

export default SideBarItem