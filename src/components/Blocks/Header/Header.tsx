import {FC} from 'react'
import SearchBar from '../../UI/SearchBar/SearchBar'

const Header: FC = () => {
  return (
    <header className="header">
      <div className="container">
        <SearchBar/>
      </div>
    </header>
  )
}

export default Header