import React from 'react'
import s from './style.scss'
import { itemStatus, itemStatusName } from 'dict/item'

export interface ISubTaskItem {
  id: number
  title: string
  status: itemStatus
}
interface ISubTaskItemProps extends ISubTaskItem {}

interface ISubTaskItemState {}

class VSubTaskItem extends React.Component<
  ISubTaskItemProps,
  ISubTaskItemState
> {
  //   constructor (props: ISubTaskItemProps) {
  //     super(props)
  //   }

  render () {
    const { id, title, status } = this.props
    return (
      <div className={s.item}>
        <div className={s.left}>
          <div className={s.id}>#{id}</div>
          <div className={s.id}>{title}</div>
        </div>
        <div className={s.right}>
          <div className={s.status}>{itemStatusName[status]}</div>
        </div>
      </div>
    )
  }
}

export default VSubTaskItem
