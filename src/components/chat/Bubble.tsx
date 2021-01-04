import React, { useEffect, useState } from 'react'
import './Bubble.scss'

interface IChatBubble {
  label: string,
  delay?: number,
  goTo?: string,
  // link: 
}

const ChatBubble = ({ label, delay }: IChatBubble) => {
  const handleOnClickBubble = () => {
    console.log('testonclick')
  }

  // const timeout = (delay: number) => {
  //   return new Promise(res => setTimeout(res, delay))
  // }

  const [isRender, setRender] = useState(false)

  useEffect(() => {
    console.log('delay', delay)
    setTimeout(function () {
      setRender(true)
    }, delay ? delay : 0 )
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
