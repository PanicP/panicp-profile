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
    <div className="project">
      {children}
    </div>
    <div className="empty-space">
      <div>
        <img src={GithubIcon} alt='github' width={ 48 } height={ 48 } />
        <img src={LinkedinIcon} alt='linkedin' width={ 48 } height={ 48 } />
      </div>
    </div>
  </div>
)

export default ProjectLayout