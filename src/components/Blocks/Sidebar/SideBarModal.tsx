import {ChangeEvent, FC} from 'react';
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input'
import FolderStore from '../../../store/FolderStore'
import Modal, {ModalSize} from '../../UI/Modal/Modal'
import {observer} from 'mobx-react-lite'

const SideBarModal: FC = observer(() => {
  return (
    <Modal size={ModalSize.small}>
      <Input
        value={FolderStore.currentFolderTitle}
        onChange={(e: ChangeEvent<HTMLInputElement>) => FolderStore.changeFolderTitle(e.target.value)}
        placeholder="Введите название папки"
        type="text"
      />
      <Button
        classNames={"mt-20"}
        onClick={FolderStore.addFolder}
      >
        Создать папку
      </Button>
    </Modal>
  )
})

export default SideBarModal