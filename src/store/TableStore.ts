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
    {id: Date.now() + 4, message: 'Привет мир', date: '10 декабря', author: 'Danil'},
    {id: Date.now() + 5, message: 'Привет друг', date: '25 июня', author: 'Kristina'},
    {id: Date.now() + 6, message: 'Привет человек', date: '7 декабря', author: 'Noname'}
  ]

  constructor() {
    makeAutoObservable(this)
  }
}

export default new TableStore()
