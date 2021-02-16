import React from 'react'
// import cn from 'classnames'
// import s from './style.scss'

interface IAssociateProps {
    title: string
    renderHeaderRight?: () => JSX.Element
    list: Record<string, any>[]
    listClassName?: string
    renderItem: (item: Record<string, any>, style: React.CSSProperties) => JSX.Element
}

interface IAssociateState {
    isShowAssociate: boolean
}

class Associate extends React.Component<IAssociateProps, IAssociateState> {
    constructor(props: IAssociateProps) {
        super(props)
        this.state = {
            isShowAssociate: false
        }
    }

    onShowAssociate = () => {
        this.setState({
            isShowAssociate: true
        })
    }


    renderItem = ({ index, style, data: { list } }: { index: number, style: React.CSSProperties, data: { list: any[] } }) => {
        return this.props.renderItem(list[index], style)
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}

export default Associate
