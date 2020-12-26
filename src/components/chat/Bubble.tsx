import React from 'react'
import './Bubble.scss'

interface ChatBubble {
  label: string
}

const ChatBubble = ( label ) => (
  <div>
    <div className='bubble-container'>
      <div className='bubble-label'>
        {/* { label } */}
      </div>
    </div>
  </div>
)

export default ChatBubble
