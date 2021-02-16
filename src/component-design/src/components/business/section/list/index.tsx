import React from 'react'
import { FixedSizeList } from 'react-window'
import cn from 'classnames'

import s from './style.scss'

export interface IListProps {
    list: Record<string, any>[]
    listClassName?: string
    renderItem: (item: Record<string, any>, style: React.CSSProperties) => JSX.Element
}

interface IListState {
    isShowList: boolean
}

const ITEM_HEIGHT = 36
class List extends React.Component<IListProps, IListState> {
    constructor(props: IListProps) {
        super(props)
        this.state = {
            isShowList: false
        }
    }

    onShowList = () => {
        this.setState({
            isShowList: true
        })
    }

    getListHeight = (len: number) => Math.min(345, ITEM_HEIGHT * len);

    renderItem = ({ index, style, data: { list } }: { index: number, style: React.CSSProperties, data: { list: any[] } }) => {
        return this.props.renderItem(list[index], style)
    }

    render() {
        const { list, listClassName } = this.props

        return (
            <div className={cn(s.list, listClassName && listClassName)}>
                {/* //tslint:disable-next-line */}
                <FixedSizeList
                    itemCount={list.length}
                    itemSize={ITEM_HEIGHT}
                    height={this.getListHeight(list.length)}
                    width={800}
                    itemData={{
                        list
                    }}
                >
                    {this.renderItem}
                </FixedSizeList>
            </div>
        )
    }
}

export default List
