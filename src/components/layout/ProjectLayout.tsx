import React from 'react'
import GithubIcon from 'Static/pictures/github.png'
import LinkedinIcon from 'Static/pictures/linkedin.png'
import './ProjectLayout.scss'

interface DefaultLayout {
  children: React.ReactNode
  // any other props that come into the component
}
// 
const ProjectLayout = ({ children }: DefaultLayout) => (
  <div className="project-layout">
    <div className="empty-space" />
    <div className="project-container">
      {children}
    </div>
    <div className="empty-space">
      <div>
        <img src={GithubIcon} alt='github' />
        <img src={LinkedinIcon} alt='linkedin' />
      </div>
    </div>
  </div>
)

export default ProjectLayout