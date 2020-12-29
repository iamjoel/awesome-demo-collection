import React from 'react';
import ISubTaskItem from './i-sub-task-item/index.tsx'
interface ISubTaskProps {

}

interface ISubTaskState {

}

class SubTask extends React.Component<ISubTaskProps, ISubTaskState> {
  constructor(props: ISubTaskProps) {
    super(props)
  }

  render() {
    return (
      <div>
        <ISubTaskItem 
          id={1}
        />
      </div>
    )
  }
}

export default SubTask
