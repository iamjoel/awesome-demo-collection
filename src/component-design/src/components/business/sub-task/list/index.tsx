import React from 'react'
import List, { IListProps } from '@/components/business/section/list'

export interface ISubTaskList extends IListProps { }
interface ISubTaskListProps extends ISubTaskList { }

interface ISubTaskListState { }

class SubTaskList extends React.Component<
    ISubTaskListProps,
    ISubTaskListState
    > {
    render() {
        return (
            <List {...this.props} />
        )
    }
}

export default SubTaskList
