import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './Bubble.scss'

interface IChatBubble {
  label: string
  displayDelay?: number
  ellipsisDelay?: number
  onClick?: Function
  trigger?: Function
  // link: 
}

const bubbleVariants = {
  hidden: {
    width: 0
  },
  visible: {
    width: 'fit-content',
    transition: {
      duration: 0.5,
    }
  }
}

const ChatBubble = ({ label, displayDelay, ellipsisDelay, onClick, trigger }: IChatBubble) => {

  const handleOnClickBubble = () => {
    { onClick ? onClick() : () => { } }
  }

  const [isRender, setRender] = useState(false)
  const [isRenderEllipsis, setRenderEllipsis] = useState(false)

  // check display delay
  useEffect(() => {
    // setRenderEllipsis(false)
    // setRender(false)
    setTimeout(() => {
      setRenderEllipsis(true)
      setEllipsisTimeout()
    }, displayDelay ? displayDelay : 0)
  }, [displayDelay])

  useEffect(() => {
    trigger ? setTimeout(() => {
      trigger()
    }, 6000) : () => { }
  }, [trigger])

  // check ellipsis delay
  const setEllipsisTimeout = () => {
    setTimeout(() => {
      setRender(true)
    }, ellipsisDelay ? ellipsisDelay : 0)
  }
  // console.log()
  // useEffect(() => {
  //   console.log(isRenderEllipsis, isRender)
  // }, [isRenderEllipsis, isRender])

  return (
    <div>
      { isRenderEllipsis &&
        <motion.div
          className='bubble-container'
          onClick={() => handleOnClickBubble()}
          variants={ bubbleVariants }
          initial='hidden'
          animate='visible'
        >
          <div className='bubble-label'>
            {isRender ? label : '...'}
          </div>
        </motion.div>
      }
    </div>
  )
}

export default ChatBubble
