import React from 'react'
import ISidebar from '../../../types/ISidebar'
import SideBarItem from './SideBarItem'

const SideBarList = () => {
  const itemObjets: ISidebar[] = [
    {id: Date.now(), title: 'Test1'},
    {id: Date.now() + 1, title: 'Test2'},
  ]

  return (
    <ul className="sidebar-inner">
      {itemObjets.map(sideBarItem =>
        <SideBarItem
          key={sideBarItem.id}
          item={sideBarItem}
        />
      )}
    </ul>
  )
}

export default SideBarList