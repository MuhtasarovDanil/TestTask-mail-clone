import {ChangeEvent, FC} from 'react'
import Button, {ButtonColors} from '../../UI/Button/Button'
import Input from '../../UI/Input/Input'
import FolderStore from '../../../store/FolderStore'
import ModalAdd, {ModalSize} from '../../UI/Modal/ModalAdd'
import {observer} from 'mobx-react-lite'

const SideBarModalAdd: FC = observer(() => {
  return (
    <ModalAdd size={ModalSize.small}>
      <Input
        value={FolderStore.currentFolderTitle}
        onChange={(e: ChangeEvent<HTMLInputElement>) => FolderStore.changeFolderTitle(e.target.value)}
        placeholder="Введите название папки"
        type="text"
        maxLength={20}
      />
      <Button
        classNames={"mt-20"}
        onClick={FolderStore.addFolder}
        color={ButtonColors.green}
      >
        Создать папку
      </Button>
    </ModalAdd>
  )
})

export default SideBarModalAdd