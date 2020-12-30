import { ISubTaskItem } from './v-sub-task-item'
const list: ISubTaskItem[] = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  }
]
export const fetchList = (): Promise<ISubTaskItem[]> =>
  new Promise((resolve: (value: ISubTaskItem[]) => void) =>
    setTimeout(() => resolve(list), 100)
  )
