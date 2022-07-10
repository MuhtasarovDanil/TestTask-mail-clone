import {FC} from 'react'
import IFolder from '../../../types/IFolder'
import SideBarModalEdit from './SideBarModalEdit'
import ModalStore from '../../../store/ModalStore'
import FolderStore from '../../../store/FolderStore'
import {observer} from 'mobx-react-lite'

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
      <a className="sidebar-item__title" href="#">
        {props.item.title}
      </a>
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