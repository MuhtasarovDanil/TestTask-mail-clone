import {FC} from 'react'
import Button from '../../UI/Button/Button'
import ModalStore from '../../../store/ModalStore'
import SideBarModal from './SideBarModal'

const SideBarHeader: FC = () => {
  return (
    <div className="sidebar-header">
      <h3 className='sidebar__title'>Папки</h3>
      <Button onClick={ModalStore.setActive}>Добавить папку</Button>
      <SideBarModal/>
    </div>
  )
}

export default SideBarHeader