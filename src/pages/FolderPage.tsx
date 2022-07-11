import React, {FC} from 'react'
import TableFolder from '../components/Blocks/Table/TableFolder'
import Header from '../components/Blocks/Header/Header'
import SideBar from '../components/Blocks/Sidebar/SideBar'

interface FolderPageProps {
  folderId?: number
}

const FolderPage: FC<FolderPageProps> = (props) => {
  return (
    <div>
      <Header />
      <SideBar />
      <TableFolder folderId={props.folderId}/>
    </div>
  )
}

export default FolderPage