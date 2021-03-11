import React from 'react'
import './DetailLayout.scss'

interface IDetailLayout {
  children: React.ReactNode
  // any other props that come into the component
}

const DetailLayout = ({ children }: IDetailLayout) => (
  <div className="detail-layout">
    <div className="detail-body">
      <div className="empty-space">

      </div>
      <div className="detail">{children}</div>
      <div className="empty-space">
        Tak
      </div>
    </div>

    <div className="detail-footer">
      <div>Created By PanicP</div>
    </div>
  </div>
)

export default DetailLayout
