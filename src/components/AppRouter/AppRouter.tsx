import {FC} from 'react'
import {Route, Routes} from 'react-router-dom'
import MainPage from '../../pages/MainPage'
import FolderPage from '../../pages/FolderPage'

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/folder/:id" element={<FolderPage/>}/>
    </Routes>
  )
}

export default AppRouter