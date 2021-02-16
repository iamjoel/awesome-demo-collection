import React from 'react'
import { Subtract } from 'utility-types';
import { ISubTaskItem } from '../item'
import { fetchList } from '../service'

export interface IInjectedSubTaskServiceProps {
    list: ISubTaskItem[]
    setList: (list: ISubTaskItem[]) => void
    fetchList: () => Promise<ISubTaskItem[]>
}

interface IWithSubTaskServiceState {
    list: ISubTaskItem[]
}

const withSubTaskService = <P extends IInjectedSubTaskServiceProps>(Component: React.ComponentType<P>) =>
    class WithSubTaskService extends React.Component<Subtract<P, IInjectedSubTaskServiceProps>, IWithSubTaskServiceState> {
        state: IWithSubTaskServiceState = {
            list: []
        }

        setList = (list: ISubTaskItem[]) => {
            this.setState({
                list
            })
        }

        render() {
            const { ...props } = this.props
            const { list } = this.state
            return (
                <Component
                    {...props as P}
                    list={list}
                    setList={this.setList}
                    fetchList={fetchList}
                />
            )
        }
    }

export default withSubTaskService