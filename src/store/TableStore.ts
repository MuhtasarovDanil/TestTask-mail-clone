import {makeAutoObservable} from 'mobx'
import {IMessage} from '../types/IMessage'
import {ITableHeader} from '../types/ITableHeader'

class TableStore {
  tableHeaders: ITableHeader[] = [
    {id: Date.now(), title: 'Автор'},
    {id: Date.now() + 2, title: 'Сообщение'},
    {id: Date.now() + 3, title: 'Дата'}
  ]

  currentFolder: IMessage[] = []

  tableCellsAll: IMessage[] = [
    {id: Date.now() + 4, message: 'Привет мир', date: '10 декабря', author: 'Danil', isSelected: false, folderId: 1},
    {id: Date.now() + 5, message: 'Привет друг', date: '25 июня', author: 'Kristina', isSelected: false, folderId: 2},
    {id: Date.now() + 6, message: 'Привет человек', date: '7 декабря', author: 'Noname', isSelected: false, folderId: 3}
  ]

  constructor() {
    makeAutoObservable(this)
  }

  selectMessage = (message: IMessage): void => {
    message.isSelected = !message.isSelected
  }

  findTableCellsByFolderId = (folderId: number): void => {
    this.currentFolder = this.tableCellsAll.filter(cell => cell.folderId === folderId)
  }
}

export default new TableStore()
