import {FC} from 'react'
import Button, {ButtonColors} from '../../UI/Button/Button'
import ModalStore from '../../../store/ModalStore'
import SideBarModalAdd from './SideBarModalAdd'

const SideBarHeader: FC = () => {
  return (
    <div className="sidebar-header">
      <h3 className='sidebar__title'>Папки</h3>
      <Button
        onClick={ModalStore.setActive}
        color={ButtonColors.green}
      >
        Добавить папку
      </Button>
      <SideBarModalAdd/>
    </div>
  )
}

export default SideBarHeader