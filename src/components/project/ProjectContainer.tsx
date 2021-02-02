import React from 'react'
import Default from 'Components/layout/Default'
import ProjectLayout from 'Components/layout/ProjectLayout'
import ProjectBox from 'Components/project/ProjectBox'
import './ProjectContainer.scss'

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 1, 1, 1, 1, 1]
const test2 = [
  {title: 'test', label: 'test1'},
  {title: 'test', label: 'test1'},
  {title: 'test', label: 'test1'},
  {title: 'test', label: 'test1'},
  {title: 'test', label: 'test1'},
  {title: 'test', label: 'test1'},
  {title: 'test', label: 'test1'},
  
]
// const test = [1, 2 , 3]

export default () => (
  <div className="project-container">
    <div className="project-header">
      <div className="project-header-title">
        Projects
          </div>
      <div className="project-header-desc">
        These are some of my projects
          </div>
    </div>
    <div className="project-list">
      {test2 && test2.map(data => <ProjectBox />)}
    </div>
  </div>
)