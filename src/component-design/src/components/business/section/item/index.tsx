import React from 'react'
import s from './style.scss'
import { itemStatus, itemStatusName } from 'dict/item'

export interface IRowItem {
    id: number
    title: string
    status: itemStatus,
    style?: React.CSSProperties;
}
interface IRowItemProps extends IRowItem { }

interface IRowItemState { }

class RowItem extends React.Component<
    IRowItemProps,
    IRowItemState
    > {
    //   constructor (props: IRowItemProps) {
    //     super(props)
    //   }

    render() {
        const { id, title, status, style } = this.props
        return (
            <div className={s.item} style={style ? style : {}}>
                <div className={s.left}>
                    <div className={s.id}>#{id}</div>
                    <div className={s.title}>{title}</div>
                </div>
                <div className={s.right}>
                    <div className={s.status}>{itemStatusName[status]}</div>
                </div>
            </div>
        )
    }
}

export default RowItem
