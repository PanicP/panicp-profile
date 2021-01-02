import React from 'react'
import './Bubble.scss'

interface IChatBubble {
  label: string,
  // link: 
}

const ChatBubble = ({ label }: IChatBubble) => {
  const handleOnClickBubble = () => {
    console.log('testonclick')
  }

  return (
    <div>
      <div className='bubble-container' onClick={ () => handleOnClickBubble()}>
        <div className='bubble-label'>
          {label}
        </div>
      </div>
    </div>
  )
}

export default ChatBubble
