import React from 'react'
import { motion } from "framer-motion"
import './ProjectBox.scss'

interface IProjectBox {
  image?: string
  title?: string
  description?: string
}

const ProjectBox = ({ image, title, description }: IProjectBox) => {
  return <>
    <div className="box-container">
      <motion.div whileHover={{ backgroundColor: "red" }}>

      </motion.div>
    </div>
    {/* <motion.div className="box-container" whileHover={{ backgroundColor: "red" }}>

    </motion.div> */}
  </>
}

export default ProjectBox