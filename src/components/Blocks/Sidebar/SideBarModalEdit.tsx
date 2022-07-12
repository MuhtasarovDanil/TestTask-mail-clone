import {ChangeEvent, FC} from 'react'
import {ModalSize} from '../../UI/Modal/ModalAdd'
import ModalEdit from '../../UI/Modal/ModalEdit'
import Input from '../../UI/Input/Input'
import Button, {ButtonColors} from '../../UI/Button/Button'
import FolderStore from '../../../store/FolderStore'
import {observer} from 'mobx-react-lite'

interface SideBarModalEditProps {
  id: number
}

const SideBarModalEdit: FC<SideBarModalEditProps> = observer((props) => {
  return (
    <ModalEdit size={ModalSize.small} id={props.id}>
      <Input
        value={FolderStore.currentFolderTitle}
        onChange={(e: ChangeEvent<HTMLInputElement>) => FolderStore.changeFolderTitle(e.target.value)}
        placeholder="Введите название папки"
        type="text"
        maxLength={20}
      />
      <Button
        classNames={"mt-20"}
        onClick={() => FolderStore.editFolder(props.id)}
        color={ButtonColors.green}
      >
        Редактировать папку
      </Button>
    </ModalEdit>
  )
})

export default SideBarModalEdit