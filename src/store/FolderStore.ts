import {makeAutoObservable} from 'mobx'
import IFolder from '../types/IFolder'

class FolderStore {
  currentFolderTitle: string = ''
  currentEditFolder: number = 0

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

  changeFolderTitle = (title: string): void => {
    this.currentFolderTitle = title
  }

  clearFolderTitle = (): void => {
    this.currentFolderTitle = ''
  }

  addFolder = (): void => {
    if (this.currentFolderTitle) {
      const newFolder: IFolder = {id: Date.now(), title: this.currentFolderTitle, isCustom: true}
      this.folders.push(newFolder)
      this.clearFolderTitle()
    }
  }

  deleteFolder = (id: number): void => {
    this.folders = this.folders.filter(folder => folder.id !== id)
  }

  setIsEdit = (id: number): void => {
    // @ts-ignore
    this.currentEditFolder = this.folders.find(folder => folder.id === id).id
  }

  editFolder = (id: number): void => {
    // @ts-ignore
    this.folders.find(folder => folder.id === id).title = this.currentFolderTitle

    this.clearFolderTitle()
  }
}

export default new FolderStore()