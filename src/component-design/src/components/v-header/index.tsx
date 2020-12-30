import React from 'react'
import s from './style.scss'

interface IVHeaderProps {
  title: string,
  onShowAssociate: () => void
}

class VHeader extends React.Component<IVHeaderProps> {
  render() {
    const {title} = this.props
    return (
      <div className={s.header}>
        <div className={s.title}>{title}</div>
        <div className={s.divide}></div>
        <div className={s.showAssociateBtn}></div>
      </div>
    )
  }
}

export default VHeader