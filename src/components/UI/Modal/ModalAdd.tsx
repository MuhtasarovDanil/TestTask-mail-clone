import {FC, FormEvent, ReactNode} from 'react'
import ModalStore from '../../../store/ModalStore'
import {observer} from 'mobx-react-lite'

export enum ModalSize {
  small = 'modal__content--sm',
  default = 'modal__content--default'
}

interface ModalProps {
  children: ReactNode,
  size: ModalSize
}

const ModalAdd: FC<ModalProps> = observer((props) => {
  const closeModal = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    ModalStore.setActive()
  }

  return (
    <form
      className={ModalStore.active
        ? "modal active"
        : "modal"
      }
      onClick={() => ModalStore.setActive()}
      onSubmit={event => closeModal(event)}
    >
      <div
        className={ModalStore.active
          ? "modal__content active " + props.size
          : "modal__content " + props.size
        }
        onClick={(event) => event.stopPropagation()}
      >
        {props.children}
      </div>
    </form>
  )
})

export default ModalAdd