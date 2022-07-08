import {makeAutoObservable} from "mobx";
import IFolder from '../types/IFolder'

class FolderStore {
  currentFolderTitle: string = ''

  folders: IFolder[] = [
    {id: Date.now(), title: 'Входящие'},
    {id: Date.now() + 1, title: 'Отправленные'},
    {id: Date.now() + 2, title: 'Черновики'},
    {id: Date.now() + 3, title: 'Удаленные'},
    {id: Date.now() + 4, title: 'Спам'}
  ]

  constructor() {
    makeAutoObservable(this)
  }

  changeFolderTitle(title: string) {
    this.currentFolderTitle = title
  }

  addFolder = (): void => {
    if (this.currentFolderTitle) {
      const newItem = {id: Date.now(), title: this.currentFolderTitle}
      this.folders.push(newItem)
      this.currentFolderTitle = ''
    }
  }
}

export default new FolderStore()