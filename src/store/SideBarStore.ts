import {makeAutoObservable} from 'mobx'

class SideBarStore {
  active: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  setIsActive = (): void => {
    this.active = !this.active
  }
}

export default new SideBarStore()