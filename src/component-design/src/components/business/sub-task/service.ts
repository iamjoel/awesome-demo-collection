import { ISubTaskItem } from './item'
import { itemStatus } from 'dict/item'

const list: ISubTaskItem[] = []

for (let i = 1; i < 21; i++) {
    list.push({
        id: i,
        title: `任务${i}`,
        status: itemStatus.NOT_START
    })
}
export const fetchList = (): Promise<ISubTaskItem[]> =>
    new Promise((resolve: (value: ISubTaskItem[]) => void) =>
        setTimeout(() => resolve(list), 100)
    )
