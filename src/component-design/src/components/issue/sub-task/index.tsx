import React from 'react'
import Associate from '../associate'
import withSubTaskService, {IInjectedSubTaskServiceProps} from './with-sub-task-service'
import VSubTaskItem, { ISubTaskItem } from './v-sub-task-item'

import s from './style.scss'

interface ISubTaskProps {
  onLoadList: () => void
  isReloadList?: boolean // 控制刷新列表的
  setIsReloadList?: (isReloadList: boolean) => void
}

interface ISubTaskState {}

@withSubTaskService
class SubTask extends React.Component<ISubTaskProps & IInjectedSubTaskServiceProps, ISubTaskState> {
  // constructor (props: ISubTaskProps) {
  //   super(props)
  // }

  componentDidMount () {
    this.fetchList()
  }

  componentDidUpdate (prevProps) {
    const { isReloadList, setIsReloadList } = this.props
    if (isReloadList && isReloadList !== prevProps.isReloadList) {
      this.fetchList()
      if (setIsReloadList) {
        setIsReloadList(false)
      } else {
        console.error('setIsReloadList is required!')
      }
    }
  }

  fetchList = async () => {
    console.log('fetchList')
    const { setList, onLoadList, fetchList } = this.props
    const list = await fetchList()
    setList(list)
    onLoadList && onLoadList()
  }

  render () {
    const { list } = this.props
    return (
      <div>
        <Associate
          title='子任务'
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

  renderItem = item => {
    return <VSubTaskItem key={item.id} {...item} />
  }
}

export default SubTask
