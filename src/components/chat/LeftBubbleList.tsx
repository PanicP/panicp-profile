import React, { useEffect, useState } from 'react'
import ChatBubble from './Bubble'
import './LeftBubbleList.scss'

interface ILeftBubbleList {
  wordingList: Array<IWordingList>
}

interface IWordingList {
  label: string
  delay?: number
  onClick?: Function
}

// const LeftBubbleList = ({ wordingList }: ILeftBubbleList) => {
const LeftBubbleList = ({ wordingList }: ILeftBubbleList) => {

  const mappingDelayList = (wordingList: Array<IWordingList>) => {
    return wordingList.map((wordingProps, index) => {
      const ellipsisDelay: number = 1000
      return {
        ...wordingProps,
        displayDelay: (index * ellipsisDelay),
        ellipsisDelay: ellipsisDelay
      }
    })
  }

  const [mappedDelayList, setMappedDelayList] = useState(mappingDelayList(wordingList))

  return <div className="left-bubble-list">
    {mappedDelayList && mappedDelayList.map(wording => (
      <ChatBubble
        label={wording.label}
        displayDelay={wording.displayDelay}
        ellipsisDelay={wording.ellipsisDelay}
        onClick={wording.onClick}
      />
    ))}
  </div>
}

export default LeftBubbleList