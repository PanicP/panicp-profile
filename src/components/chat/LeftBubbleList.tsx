import React from 'react'
import ChatBubble from './Bubble'
import './LeftBubbleList.scss'

interface ILeftBubbleList {
  wordingList: Array<string>
}

const LeftBubbleList = ({ wordingList }: ILeftBubbleList) => {
  return <div className="left-bubble-list">
    {wordingList.map(wording => (
      <ChatBubble label={wording} />
    ))}
  </div>
}

export default LeftBubbleList