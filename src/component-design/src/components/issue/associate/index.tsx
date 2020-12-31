import React from 'react'
import VHeader from '../v-header'
import s from './style.scss'

interface IAssociateProps {
  title: string,
  renderHeaderRight?: () => JSX.Element,
  list: Record<string, any>[],
  renderItem: (item: Record<string, any>) => JSX.Element
}

interface IAssociateState {
  isShowAssociate: boolean
}

class Associate extends React.Component<IAssociateProps, IAssociateState> {
  constructor (props: ISubTaskProps) {
    super(props)
    this.state = {
      isShowAssociate: false
    }
  }
  onShowAssociate = () => {
    this.setState({
      isShowAssociate: true
    })
  }

  render () {
    const { title, renderHeaderRight, list, renderItem } = this.props

    return (
      <div>
        <VHeader
          title={title}
          onShowAssociate={this.onShowAssociate}
          renderRight={renderHeaderRight}
        />
        {/* 列表 */}
        <div className={s.list}>
          {list.map(item => {
            return renderItem(item)
          })}
        </div>
        {/*  */}
      </div>
    )
  }
}

export default Associate
