import React from 'react'
import './ProjectBox.scss'

interface IProjectBox {
  image?: string
  title?: string
  description?: string
}

const ProjectBox = ({ image, title, description }: IProjectBox ) => {
  return <>
    <div className="box-container">
      <div></div>
    </div>
  </>
}

export default ProjectBox