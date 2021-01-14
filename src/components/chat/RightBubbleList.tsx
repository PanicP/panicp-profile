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
  onClick?: Function
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

  useEffect(() => {
    setMappedDelayList(mappingDelayList(rightWordingList))
  }, [rightWordingList])

  return <div className="right-bubble-list">
    {mappedDelayList && mappedDelayList.map((wording, index) => (
      <ChatBubble
        key={`${index}-${wording.label}`} // forced bubble to remount
        label={wording.label}
        displayDelay={wording.displayDelay}
        ellipsisDelay={wording.ellipsisDelay}
        onClick={wording.onClick}
      />
    ))}
  </div>
}

export default RightBubbleList