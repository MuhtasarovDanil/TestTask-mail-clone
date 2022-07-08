import {FC} from 'react'
import SideBar from './components/Blocks/Sidebar/SideBar'
import Header from './components/Blocks/Header/Header'
import Table from './components/Blocks/Table/Table'

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <div className="container">
        <Table />
      </div>
    </div>
  )
}

export default App