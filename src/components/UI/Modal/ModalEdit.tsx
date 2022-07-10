import {FC, ReactNode, FormEvent} from 'react'
import ModalStore from '../../../store/ModalStore'
import FolderStore from '../../../store/FolderStore'

export enum ModalSize {
  small = 'modal__content--sm',
  default = 'modal__content--default'
}

interface ModalEditProps {
  id: number
  children: ReactNode
  size: ModalSize
}

const ModalEdit: FC<ModalEditProps> = (props) => {
  const closeModal = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    ModalStore.setEdit()
  }

  return (
    <form
      className={ModalStore.edit && FolderStore.currentEditFolder === props.id
        ? "modal active"
        : "modal"
      }
      onClick={() => ModalStore.setEdit()}
      onSubmit={event => closeModal(event)}
    >
      <div
        className={ModalStore.edit && FolderStore.currentEditFolder === props.id
          ? "modal__content active " + props.size
          : "modal__content " + props.size
        }
        onClick={(event) => event.stopPropagation()}
      >
        {props.children}
      </div>
    </form>
  )
}

export default ModalEdit