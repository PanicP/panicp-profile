import React, { useEffect, useState } from 'react'
import ChatBubble from './Bubble'
import './LeftBubbleList.scss'

interface ILeftBubbleList {
  wordingList: Array<IWordingList>
}

interface IWordingList {
  label: string
  delay?: number
  goTo?: string
}

// const LeftBubbleList = ({ wordingList }: ILeftBubbleList) => {
const LeftBubbleList = ({ wordingList }: ILeftBubbleList) => {

  const mappingDelayList = (wordingList: Array<IWordingList>) => {
    return wordingList.map((wordingProps, index) => {

      return {
        ...wordingProps,
        delay: (index + 1) * 1000
      }
    })
  }

  const [mappedDelayList, setMappedDelayList] = useState(mappingDelayList(wordingList))

  // useEffect(() => {
  //   setMappedDelayList(
  //     (wordingList: Array<IWordingList>) => {
  //     return wordingList.map((wordingProps, index) => {

  //       return {
  //         ...wordingProps,
  //         delay: index * 1000
  //       }
  //     })
  //   })

  // }, wordingList)

  console.log(mappedDelayList)

  return <div className="left-bubble-list">
    {mappedDelayList.map(wording => (
      <ChatBubble
        label={wording.label}
        delay={wording.delay}
        goTo={wording.goTo}
      />
    ))}
  </div>
}

export default LeftBubbleList