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
      transition={{ type: 'tween' }}
      onClick={() => { alert('test') }}
    >
      {/* <div className="hobby-background-image">
          <img src={image} />
        </div> */}
      <div className="hobby-inner-container">
        <div className="hobby-background-image">
          <img src={image}/>
        </div>
        <div className="hobby-inner-body">
          <div className="hobby-upper-box">
            {title ? title : 'PROJECT NAME'}
          </div>
          <div className="hobby-lower-box">
            {description ? description : 'PROJECT DESCRIPTION'}
          </div>
        </div>

      </div>

    </motion.div>
  </div>

)