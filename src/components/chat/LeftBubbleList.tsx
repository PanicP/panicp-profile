import React, { useEffect, useState } from 'react'
import ChatBubble from './Bubble'
import './LeftBubbleList.scss'

interface ILeftBubbleList {
  wordingList: Array<IWordingList>
}

interface IWordingList {
  label: string
  delay?: number
  // onClick?: Function
  trigger?: Function
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

  useEffect(() => {
    setMappedDelayList(mappingDelayList(wordingList))
  }, [wordingList])

  return <div className="left-bubble-list">
    {mappedDelayList && mappedDelayList.map((wording, index) => (
      <ChatBubble
        key={`${index}-${wording.label}`} // forced bubble to remount
        label={wording.label}
        displayDelay={wording.displayDelay}
        ellipsisDelay={wording.ellipsisDelay}
        trigger={wording.trigger}
      />
    ))}
  </div>
}

export default LeftBubbleList