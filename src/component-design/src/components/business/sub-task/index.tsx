import React from 'react'
import Header from '../section/header'
import List from './list'
import withSubTaskService, { IInjectedSubTaskServiceProps } from './with-sub-task-service'
import SubTaskItem, { ISubTaskItem } from './item'

interface ISubTaskProps {
    onLoad?: () => void
    controlReload?: number // 控制刷新列表的
}

interface ISubTaskState { }

class SubTask extends React.Component<ISubTaskProps & IInjectedSubTaskServiceProps, ISubTaskState> {
    // constructor (props: ISubTaskProps) {
    //   super(props)
    // }

    componentDidMount() {
        this.fetchList()
    }

    componentDidUpdate(prevProps: ISubTaskProps & IInjectedSubTaskServiceProps) {
        const { controlReload } = this.props
        if (controlReload !== prevProps.controlReload) {
            this.fetchList()
        }
    }

    fetchList = async () => {
        const { setList, onLoad, fetchList } = this.props
        const list = await fetchList()
        setList(list)
        onLoad && onLoad()
    }

    render() {
        const { list } = this.props
        return (
            <div>
                <Header
                    title="子任务"
                    onShowAssociate={() => { }}
                    renderRight={this.renderFinishStatus}
                />

                <List
                    list={list}
                    renderItem={this.renderItem}
                />
            </div>
        )
    }

    renderFinishStatus = () => {
        return <div>0/3 已完成</div>
    }

    renderItem = (item: Record<string, any>, style: React.CSSProperties) => {
        return <SubTaskItem key={item.id} {...item as ISubTaskItem} style={style} />
    }
}

export default withSubTaskService(SubTask)
