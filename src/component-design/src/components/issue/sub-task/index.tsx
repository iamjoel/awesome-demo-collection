import React from 'react'

import Associate from '../associate'
import withSubTaskService, {IInjectedSubTaskServiceProps} from './with-sub-task-service'
import VSubTaskItem, {ISubTaskItem} from './v-sub-task-item'

// import s from './style.scss'
interface ISubTaskProps {
  onLoad?: () => void
  controlReload?: number // 控制刷新列表的
}

interface ISubTaskState {}

class SubTask extends React.Component<ISubTaskProps & IInjectedSubTaskServiceProps, ISubTaskState> {
  // constructor (props: ISubTaskProps) {
  //   super(props)
  // }

  componentDidMount () {
    this.fetchList()
  }

  componentDidUpdate (prevProps: ISubTaskProps & IInjectedSubTaskServiceProps) {
    const { controlReload } = this.props
    if (controlReload  !== prevProps.controlReload) {
      this.fetchList()
    }
  }

  fetchList = async () => {
    const { setList, onLoad, fetchList } = this.props
    const list = await fetchList()
    setList(list)
    onLoad && onLoad()
  }

  render () {
    const { list } = this.props
    return (
      <div>
        <Associate
          title="子任务"
          list={list}
          renderItem={this.renderItem}
          renderHeaderRight={this.renderFinishStatus}
        />
      </div>
    )
  }

  renderFinishStatus = () => {
    return <div>0/3 已完成</div>
  }

  renderItem = (item: Record<string, any>, style: React.CSSProperties) => {
    return <VSubTaskItem key={item.id} {...item as ISubTaskItem} style={style} />
  }
}

export default withSubTaskService(SubTask)
