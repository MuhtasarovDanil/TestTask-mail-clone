import {makeAutoObservable} from 'mobx'
import IFolder from '../types/IFolder'

class FolderStore {
  currentFolderTitle: string = ''
  currentEditFolder: number = 0

  folders: IFolder[] = [
    {id: 1, title: 'Входящие', isCustom: false},
    {id: 2, title: 'Отправленные', isCustom: false},
    {id: 3, title: 'Черновики', isCustom: false},
    {id: 4, title: 'Удаленные', isCustom: false},
    {id: 5, title: 'Спам', isCustom: false}
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
      const lastFolderIndex = this.folders.length
      const newFolder: IFolder = {
        id: this.folders[lastFolderIndex - 1].id + 1,
        title: this.currentFolderTitle,
        isCustom: true
      }

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
    if (this.currentFolderTitle.length > 0) {
      // @ts-ignore
      this.folders.find(folder => folder.id === id).title = this.currentFolderTitle
    }
    this.clearFolderTitle()
  }
}

export default new FolderStore()