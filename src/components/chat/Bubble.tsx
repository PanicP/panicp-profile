import React from 'react'
import './Bubble.scss'

interface IChatBubble {
  label: string
}

const ChatBubble = ({ label }: IChatBubble) => (
  <div>
    <div className='bubble-container'>
      <div className='bubble-label'>
        { label }
      </div>
    </div>
  </div>
)

export default ChatBubble
