import React from 'react'
import GithubIcon from 'Static/pictures/github.png'
import LinkedinIcon from 'Static/pictures/linkedin.png'
import PPIcon from 'Static/pictures/pplogo.svg'
import './ProjectLayout.scss'

interface DefaultLayout {
  children: React.ReactNode
  // any other props that come into the component
}

interface INavigateToExternalUrl {
  url: string
  shouldOpenNewTab: boolean
}

const navigateToExternalUrl = ({ url, shouldOpenNewTab }: INavigateToExternalUrl) => (shouldOpenNewTab ? window.open(url, '_blank') : (window.location.href = url))

const ProjectLayout = ({ children }: DefaultLayout) => (
  <div className="project-layout">
    <div className="project-body">
      <div className="empty-space">
        <img
          className="icon"
          src={PPIcon}
          alt="github"
          width={96}
          height={96}
        />
      </div>
      <div className="project">{children}</div>
      <div className="empty-space">
        <div className="icons-container">
          <img
            className="icon"
            onClick={() => navigateToExternalUrl({ url: 'https://github.com/PanicP', shouldOpenNewTab: true, })}
            src={GithubIcon}
            alt="github"
            width={24}
            height={24}
          />
          <img
            className="icon"
            onClick={() => navigateToExternalUrl({ url: 'https://www.linkedin.com/in/thunthian-pornmuneewong-04bbb5190/', shouldOpenNewTab: true, })}
            src={LinkedinIcon}
            alt="linkedin"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>

    <div className="project-footer">
      <div>Created By PanicP</div>
    </div>
  </div>
)

export default ProjectLayout
