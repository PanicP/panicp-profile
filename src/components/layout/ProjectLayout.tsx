import React from 'react'

import './ProjectLayout.scss'

interface DefaultLayout {
  children: React.ReactNode
  // any other props that come into the component
}

const ProjectLayout = ({ children }: DefaultLayout) => (
  <div className="project-layout">
    <div className="empty-space" />
    <div className="project-container">
      {children}
    </div>
    <div className="empty-space">
      <div>
        <img src={'../../static/pictures/github.png'} />
        <img src={'../../static/pictures/linkedin.png'} />
      </div>
    </div>
  </div>
)

export default ProjectLayout