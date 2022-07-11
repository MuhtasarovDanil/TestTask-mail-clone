import React from 'react'
import SideBar from '../components/Blocks/Sidebar/SideBar'
import Header from '../components/Blocks/Header/Header'
import TableMainFolder from '../components/Blocks/Table/TableMainFolder'

const MainPage = () => {
  return (
    <div>
      <Header/>
      <SideBar/>
      <TableMainFolder/>
    </div>
  )
}

export default MainPage