import React from 'react'
import { motion } from "framer-motion"
import './HobbyBox.scss'

interface IHobbyBox {
  image?: string
  title: string
  description: string
}

export default ({ image, title, description }: IHobbyBox) => (
  <div className="hobby-box-container">
    <motion.div className="hobby-box-motion"
      whileHover={{ bottom: 0 }}
      transition={{ type: 'tween'}}
      onClick={() => { alert('test') }}>
      <div className="hobby-upper-box">
        {title ? title : 'PROJECT NAME'}
      </div>
      <div className="hobby-lower-box">
        {description ? description : 'PROJECT DESCRIPTION'}
      </div>
    </motion.div>
  </div>

)