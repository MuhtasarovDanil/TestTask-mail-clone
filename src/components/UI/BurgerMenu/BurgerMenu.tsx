import {FC} from 'react'

interface BurgerMenuProps {
  onClick: () => void
}

const BurgerMenu: FC<BurgerMenuProps> = (props) => {
  return (
    <div
      className="burger-btn"
      onClick={props.onClick}
    >
      <span/>
    </div>
  )
}

export default BurgerMenu;