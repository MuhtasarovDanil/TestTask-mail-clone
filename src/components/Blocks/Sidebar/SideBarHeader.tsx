import {FC} from 'react'
import Button from '../../UI/Button/Button'

const SideBarHeader: FC = () => {
  return (
    <div className="sidebar-header">
      <h3 className='sidebar__title'>Папки</h3>
      <Button>Добавить папку</Button>
    </div>
  )
}

export default SideBarHeader