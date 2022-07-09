import {makeAutoObservable} from 'mobx'
import IFolder from '../types/IFolder'

class FolderStore {
  currentFolderTitle: string = ''

  folders: IFolder[] = [
    {id: Date.now(), title: 'Входящие', isCustom: false},
    {id: Date.now() + 1, title: 'Отправленные', isCustom: false},
    {id: Date.now() + 2, title: 'Черновики', isCustom: false},
    {id: Date.now() + 3, title: 'Удаленные', isCustom: false},
    {id: Date.now() + 4, title: 'Спам', isCustom: false}
  ]

  constructor() {
    makeAutoObservable(this)
  }

  changeFolderTitle(title: string): void {
    this.currentFolderTitle = title
  }

  addFolder = (): void => {
    if (this.currentFolderTitle) {
      const newFolder: IFolder = {id: Date.now(), title: this.currentFolderTitle, isCustom: true}
      this.folders.push(newFolder)
      this.currentFolderTitle = ''
    }
  }

  deleteFolder = (id: number): void => {
    this.folders = this.folders.filter(folder => folder.id !== id)
  }
}

export default new FolderStore()