import React from 'react'
import s from './style.scss'

interface IAssociateProps {
  title: string
  list: Record<string, any>[]
  renderItem: (item: Record<string, any>) => JSX.Element
}

interface IAssociateState {}

class Associate extends React.Component<IAssociateProps, IAssociateState> {
  render () {
    const { title, list, renderItem } = this.props

    return (
      <div>
        <h3>{title}</h3>
        <div className={s.list}>
          {list.map(item => {
            return renderItem(item)
          })}
        </div>
      </div>
    )
  }
}

export default Associate
