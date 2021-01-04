import React, { useEffect, useState } from 'react'
import './Bubble.scss'

interface IChatBubble {
  label: string,
  // link: 
}

const ChatBubble = ({ label }: IChatBubble) => {
  const handleOnClickBubble = () => {
    console.log('testonclick')
  }

  const timeout = (delay: number) => {
    return new Promise(res => setTimeout(res, delay))
  }

  const [isRender, setRender] = useState(false)

  useEffect(() => {
    setTimeout(function () {
      setRender(true)
    }, 1000)
  }, [])

  return (
    <div>
      <div className='bubble-container' onClick={() => handleOnClickBubble()}>
        <div className='bubble-label'>
          { isRender ? label : '...'}
        </div>
      </div>
    </div>
  )
}

export default ChatBubble
