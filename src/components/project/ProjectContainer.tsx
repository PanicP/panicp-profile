import React from 'react'
import ProjectBox from 'Components/project/ProjectBox'
import './ProjectContainer.scss'

const Projects = [
  {
    image: '',
    title: 'To the skies',
    description: 'A 1v1 spaceship battle game with random enemy movement by Java.',
    src: 'https://github.com/PanicP/To-The-Skies',
    demo: ''
  },
  {
    image: '',
    title: 'Spaaaaaaaam',
    description: 'A single column vsrg game with only 1 song (lol) by Pygame from Python.',
    src: 'https://github.com/PanicP/Spaaaaaaaam',
    demo: ''
  },
  {
    image: '',
    title: 'Panic Profile',
    description: 'PanicP\'s Profile with a chatbot style by ReactJS',
    src: 'https://github.com/PanicP/Spaaaaaaaam',
    demo: ''
  },
]

export default () => (
  <div className="project-container">
    <div className="back-button">
      <div>
        &lt; Back to chat
      </div>
    </div>
    <div className="project-header">
      <div className="project-header-title">
        Projects
          </div>
      <div className="project-header-desc">
        These are some of my projects
          </div>
    </div>
    <div className="project-list">
      {Projects && Projects.map(data => <ProjectBox
        image={data.image}
        title={data.title}
        description={data.description}
        src={data.src}
        demo={data.demo}
      />)}
    </div>
  </div>
)