import React from 'react'
import { FixedSizeList } from 'react-window'
import VHeader from '../v-header'
import cn from 'classnames'
import s from './style.scss'

interface IAssociateProps {
  title: string
  renderHeaderRight?: () => JSX.Element
  list: Record<string, any>[]
  listClassName?: string
  renderItem: (item: Record<string, any>, style: React.CSSProperties) => JSX.Element
}

interface IAssociateState {
  isShowAssociate: boolean
}

const ITEM_HEIGHT = 36
class Associate extends React.Component<IAssociateProps, IAssociateState> {
  constructor (props: IAssociateProps) {
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
  
  getListHeight = (len: number) => Math.min(345, ITEM_HEIGHT * len);

  renderItem = ({index, style, data: {list}}: {index: number, style: React.CSSProperties, data: {list: any[]}}) => {
    return this.props.renderItem(list[index], style)
  }

  render () {
    const { title, renderHeaderRight, list, listClassName } = this.props

    return (
      <div>
        <VHeader
          title={title}
          onShowAssociate={this.onShowAssociate}
          renderRight={renderHeaderRight}
        />
        {/* 列表 */}
        <div className={cn(s.list, listClassName && listClassName)}>
          {/* //tslint:disable-next-line */}
          <FixedSizeList
            itemCount={list.length}
            itemSize={ITEM_HEIGHT}
            height={this.getListHeight(list.length)}
            width={300}
            itemData={{
              list
            }}
          >
            {this.renderItem}
          </FixedSizeList>
        </div>
        {/*  */}
      </div>
    )
  }
}

export default Associate
