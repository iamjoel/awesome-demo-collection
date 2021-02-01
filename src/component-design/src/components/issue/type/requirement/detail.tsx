import React from 'react'
import SubTask from '@/components/issue/sub-task'
// import s from './assets/detail.scss'

export interface IRequirementDetailProps {
  
}

export interface IRequirementDetailState {
  controlReloadSubTask: number
}

export default class IRequirementDetail extends React.Component<IRequirementDetailProps, IRequirementDetailState> {
  constructor(props: IRequirementDetailProps) {
    super(props)
    this.state = {
      controlReloadSubTask: Date.now(),
    }
  }

  setIsReloadList() {

  }

  render() {
    const {controlReloadSubTask} = this.state
    return (
      <div>
        <SubTask
          controlReload={controlReloadSubTask}
        />
      </div>
    )
  }
}
