import {makeAutoObservable} from 'mobx'

class ModalStore {
  active: boolean = false
  edit: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  setActive = (): void => {
    this.active = !this.active
  }

  setEdit = (): void => {
    this.edit = !this.edit
  }
}

export default new ModalStore()
