import {FC} from 'react'
import SideBarHeader from './SideBarHeader'
import SideBarList from './SideBarList'

const SideBar: FC = () => {
  return (
    <div className='sidebar'>
      <SideBarHeader/>
      <hr className='sidebar-line'/>
      <SideBarList/>
    </div>
  )
}

export default SideBar