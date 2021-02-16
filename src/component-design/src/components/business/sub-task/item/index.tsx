import React from 'react'
import RowItem, { IRowItem } from '@/components/business/section/item'

export interface ISubTaskItem extends IRowItem { }
interface ISubTaskItemProps extends ISubTaskItem { }

interface ISubTaskItemState { }

class SubTaskItem extends React.Component<
    ISubTaskItemProps,
    ISubTaskItemState
    > {
    //   constructor (props: ISubTaskItemProps) {
    //     super(props)
    //   }

    render() {
        return (
            <RowItem {...this.props} />
        )
    }
}

export default SubTaskItem
