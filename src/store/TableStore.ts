import {makeAutoObservable} from 'mobx'
import {IMessage} from '../types/IMessage'
import {ITableHeader} from '../types/ITableHeader'

class TableStore {
  tableHeaders: ITableHeader[] = [
    {id: Date.now(), title: 'Автор'},
    {id: Date.now() + 2, title: 'Сообщение'},
    {id: Date.now() + 3, title: 'Дата'}
  ]

  tableCells: IMessage[] = [
    {id: Date.now() + 4, message: 'Привет мир', date: '10 декабря', author: 'Danil', isSelected: false},
    {id: Date.now() + 5, message: 'Привет друг', date: '25 июня', author: 'Kristina', isSelected: false},
    {id: Date.now() + 6, message: 'Привет человек', date: '7 декабря', author: 'Noname', isSelected: false}
  ]

  constructor() {
    makeAutoObservable(this)
  }

  selectMessage(message: IMessage): void{
    message.isSelected = !message.isSelected
  }
}

export default new TableStore()
