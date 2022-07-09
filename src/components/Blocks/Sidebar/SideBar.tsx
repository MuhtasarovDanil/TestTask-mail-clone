import {FC} from 'react'
import SideBarHeader from './SideBarHeader'
import SideBarItem from './SideBarItem'
import List from '../../Util/List'
import FolderStore from '../../../store/FolderStore'
import IFolder from '../../../types/IFolder'
import {observer} from 'mobx-react-lite'

const SideBar: FC = observer(() => {
  return (
    <div className="sidebar">
      <SideBarHeader/>
      <hr className="sidebar-line"/>
      <List
        items={FolderStore.folders}
        renderItem={(item: IFolder) => <SideBarItem item={item} key={item.id}/> }
      />
    </div>
  )
})

export default SideBar