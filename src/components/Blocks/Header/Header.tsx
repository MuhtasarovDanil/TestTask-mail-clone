import {FC} from 'react'
import BurgerMenu from '../../UI/BurgerMenu/BurgerMenu'
import SideBarStore from '../../../store/SideBarStore'
import {observer} from 'mobx-react-lite'

const Header: FC = observer(() => {
  return (
    <header className="header">
      <div className="container header-inner">
        <a className="header__logo" href="https://github.com/MuhtasarovDanil">&copy; MuhtasarovDanil</a>
        <BurgerMenu
          onClick={() => SideBarStore.setIsActive()}
        />
      </div>
    </header>
  )
})

export default Header