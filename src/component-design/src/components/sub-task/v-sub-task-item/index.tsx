import React from 'react'
import s from './style.scss'

export interface ISubTaskItem {
  id: number
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
    const { id } = this.props
    return <div className={s.item}>#{id}</div>
  }
}

export default VSubTaskItem
