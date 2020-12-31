import { ISubTaskItem } from './v-sub-task-item'
import {itemStatus} from 'dict/item'

const list: ISubTaskItem[] = [
  {
    id: 1,
    title: '任务1',
    status: itemStatus.NOT_START
  },
  {
    id: 2,
    title: '任务2',
    status: itemStatus.NOT_START
  },
  {
    id: 3,
    title: '任务3',
    status: itemStatus.NOT_START
  }
]
export const fetchList = (): Promise<ISubTaskItem[]> =>
  new Promise((resolve: (value: ISubTaskItem[]) => void) =>
    setTimeout(() => resolve(list), 100)
  )
