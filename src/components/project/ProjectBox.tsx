import React from 'react'
import { motion } from "framer-motion"
import './ProjectBox.scss'

interface IProjectBox {
  image?: string
  title: string
  description: string
  src: string
  demo?: string
}

interface INavigateToExternalUrl {
  url: string
  shouldOpenNewTab: boolean
}

const navigateToExternalUrl = ({ url, shouldOpenNewTab }: INavigateToExternalUrl) => (shouldOpenNewTab ? window.open(url, '_blank') : (window.location.href = url))


const ProjectBox = ({ image, title, description, src, demo }: IProjectBox) => {
  return <>
    <div className="box-container">
      <motion.div
        className="box-motion"
        whileHover={{ bottom: 0 }}
        transition={{ type: 'tween' }}>
        <div className="upper-box">
          {title ? title : 'PROJECT NAME'}
        </div>
        <div className="lower-box">
          {description ? description : 'PROJECT DESCRIPTION'}
          <div className="button-container">
            <div className="source button" onClick={() => navigateToExternalUrl({ url: src, shouldOpenNewTab: true })}>
              <div>Source</div>
            </div>
            {demo &&
              <div className="demo button" onClick={() => navigateToExternalUrl({ url: demo, shouldOpenNewTab: true })}>
                <div>Demo</div>
              </div>
            }
          </div>
        </div>
      </motion.div>
    </div>
    {/* <motion.div className="box-container" whileHover={{ backgroundColor: "red" }}>

    </motion.div> */}
  </>
}

export default ProjectBox