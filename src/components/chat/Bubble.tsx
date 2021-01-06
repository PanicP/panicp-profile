import React, { useEffect, useState } from 'react'
import './Bubble.scss'

interface IChatBubble {
  label: string,
  displayDelay?: number,
  ellipsisDelay?: number,
  goTo?: string,
  // link: 
}

const ChatBubble = ({ label, displayDelay, ellipsisDelay }: IChatBubble) => {

  const handleOnClickBubble = () => {
    console.log('testonclick')
  }

  const [isRender, setRender] = useState(false)
  const [isRenderEllipsis, setRenderEllipsis] = useState(false)
  // const [timer, setTimer] = useState(0)

  let timer: number = 0
  // check display delay
  useEffect(() => {
    setTimeout(function () {
      setRenderEllipsis(true)
      setEllipsisTimeout()
    }, displayDelay ? displayDelay : 0)
  }, [])

  // check ellipsis delay
  const setEllipsisTimeout = () => {
    setTimeout(() => {
      setRender(true)
    }, ellipsisDelay ? ellipsisDelay : 0)
  }
  // console.log()

  return (
    <div>
      { isRenderEllipsis &&
        <div className='bubble-container' onClick={() => handleOnClickBubble()}>
          <div className='bubble-label'>
            {isRender ? label : '...'}
          </div>
        </div>
      }
    </div>
  )
}

export default ChatBubble
