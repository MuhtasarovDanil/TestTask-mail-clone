import {makeAutoObservable} from 'mobx'

class ModalStore {
  active: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  setActive = () => {
    this.active = !this.active
  }
}

export default new ModalStore()
