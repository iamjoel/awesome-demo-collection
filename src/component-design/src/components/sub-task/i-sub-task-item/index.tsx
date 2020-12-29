import React from 'react'
import s from './style.scss'

interface ISubTaskItemProps {
  id: number,
}

interface ISubTaskItemState {

}

class ISubTaskItem extends React.Component<ISubTaskItemProps, ISubTaskItemState> {
  // constructor(props: ISubTaskProps) {
  //   super(props)
  // }

  render() {
    const {id} = this.props
    console.log(s)
    return (
      <div className={s.item}>#{id}</div>
    )
  }
}

export default ISubTaskItem
