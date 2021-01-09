import React, { useEffect, useState } from 'react'
import ChatBubble from './Bubble'
import './RightBubbleList.scss'

interface IRightBubbleList {
  leftWordingList: Array<IWordingList>
  rightWordingList: Array<IWordingList>
}

interface IWordingList {
  label: string
  delay?: number
  goTo?: string
}

const RightBubbleList = ({ leftWordingList, rightWordingList  }: IRightBubbleList) => {

  const mappingDelayList = (wordingList: Array<IWordingList>) => {
    return wordingList.map((wordingProps, index) => {
      const ellipsisDelay: number = 1000
      return {
        ...wordingProps,
        displayDelay: (leftWordingList.length * ellipsisDelay),
        ellipsisDelay: ellipsisDelay
      }
    })
  }

  const [mappedDelayList, setMappedDelayList] = useState(mappingDelayList(rightWordingList))

  return <div className="right-bubble-list">
    {mappedDelayList.map(wording => (
      <ChatBubble
        label={wording.label}
        displayDelay={wording.displayDelay}
        ellipsisDelay={wording.ellipsisDelay}
        goTo={wording.goTo}
      />
    ))}
  </div>
}

export default RightBubbleList