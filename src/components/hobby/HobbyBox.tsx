import React from 'react'
import { motion } from "framer-motion"
import './HobbyBox.scss'

interface IProjectBox {
  image?: string
  title: string
  description: string
}

export default ({ image, title, description }: IProjectBox) => (
  <div className="box-container">
    <motion.div className="box-motion" whileHover={{ bottom: 0 }}>
      <div className="upper-box">
        {title ? title : 'PROJECT NAME'}
      </div>
      <div className="lower-box">
        {description ? description : 'PROJECT DESCRIPTION'}
      </div>
    </motion.div>
  </div>

)