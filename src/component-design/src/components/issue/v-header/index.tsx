import React from 'react'
import s from './style.scss'

interface IVHeaderProps {
  title: string
  renderRight?: () => JSX.Element
  onShowAssociate: () => void
}

class VHeader extends React.Component<IVHeaderProps> {
  render () {
    const { title, renderRight } = this.props
    return (
      <div className={s.header}>
        <div className={s.left}>
          <div className={s.title}>{title}</div>
          <div className={s.divide}></div>
          <div className={s.showAssociateBtn}></div>
        </div>
        {renderRight && <div className={s.right}>{renderRight()}</div>}
      </div>
    )
  }
}

export default VHeader
