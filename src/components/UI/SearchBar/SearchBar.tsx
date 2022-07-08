import {FC} from 'react'
import Input from '../Input/Input'
import Button, {ButtonColors} from '../Button/Button'

const SearchBar: FC = () => {
  return (
    <div className="searchbar">
      <Input placeholder="Поиск"/>
      <Button
        color={ButtonColors.primary}
        classNames="searchbar__btn"
      >
        Найти
      </Button>
    </div>
  )
}

export default SearchBar