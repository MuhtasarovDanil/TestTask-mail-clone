import {makeAutoObservable} from 'mobx'
import {IMessage} from '../types/IMessage'
import {ITableHeader} from '../types/ITableHeader'

class TableStore {
  currentFolder: IMessage[] = []

  tableHeaders: ITableHeader[] = [
    {id: Date.now(), title: 'Автор'},
    {id: Date.now() + 1, title: 'Сообщение'},
    {id: Date.now() + 2, title: 'Дата'}
  ]

  tableCellsAll: IMessage[] = [
    {
      id: Date.now() + 3,
      message: 'Здесь находятся входящие сообщения',
      date: '10 декабря',
      author: 'Danil',
      isSelected: false,
      folderId: 1
    },
    {
      id: Date.now() + 4,
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur consequuntur cum, debitis eos illum praesentium reiciendis ut. Accusamus beatae eius in iusto quasi quibusdam quo, reiciendis sunt voluptate voluptates.\n',
      date: '25 июня',
      author: 'Vasya',
      isSelected: false,
      folderId: 1
    },
    {
      id: Date.now() + 3,
      message: 'Здесь находятся отправленные сообщения',
      date: '10 декабря',
      author: 'Danil',
      isSelected: false,
      folderId: 2
    },
    {
      id: Date.now() + 5,
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur consequuntur cum, debitis eos illum praesentium reiciendis ut. Accusamus beatae eius in iusto quasi quibusdam quo, reiciendis sunt voluptate voluptates.\n',
      date: '25 июня',
      author: 'Petya',
      isSelected: false,
      folderId: 2
    },
    {
      id: Date.now() + 6,
      message: 'Здесь находтся черновики',
      date: '7 декабря',
      author: 'Noname',
      isSelected: false,
      folderId: 3
    },
    {
      id: Date.now() + 7,
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur consequuntur cum, debitis eos illum praesentium reiciendis ut. Accusamus beatae eius in iusto quasi quibusdam quo, reiciendis sunt voluptate voluptates.\n',
      date: '7 декабря',
      author: 'Noname',
      isSelected: false,
      folderId: 3
    },
    {
      id: Date.now() + 8,
      message: 'Здесь находятся удаленные',
      date: '7 декабря',
      author: 'Noname',
      isSelected: false,
      folderId: 4
    },
    {
      id: Date.now() + 9,
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur consequuntur cum, debitis eos illum praesentium reiciendis ut. Accusamus beatae eius in iusto quasi quibusdam quo, reiciendis sunt voluptate voluptates.\n',
      date: '7 декабря',
      author: 'Noname',
      isSelected: false,
      folderId: 4
    },
    {
      id: Date.now() + 10,
      message: 'Здесь находятся спам',
      date: '7 декабря',
      author: 'Noname',
      isSelected: false,
      folderId: 5
    },
    {
      id: Date.now() + 11,
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur consequuntur cum, debitis eos illum praesentium reiciendis ut. Accusamus beatae eius in iusto quasi quibusdam quo, reiciendis sunt voluptate voluptates.\n',
      date: '7 декабря',
      author: 'Noname',
      isSelected: false,
      folderId: 5
    },
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
