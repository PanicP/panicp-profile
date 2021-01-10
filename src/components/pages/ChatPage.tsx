import React, { useEffect, useState } from 'react'
import Default from 'Components/layout/Default'
import ChatLayout from 'Components/layout/ChatLayout'
import LeftBubbleList from 'Components/chat/LeftBubbleList'
import RightBubbleList from 'Components/chat/RightBubbleList'

interface IchangeConversationContext {
    goTo: string
}

export default () => {
    const mySentence = {
        1: 'Welcome to my simple portfolio.',
        2: 'Do you want to know something about me ?',
        3: 'So, I have some side projects and my hobbies.',
        4: 'Which one do you want to see ?',
        5: 'See ya.'
    }

    const yourSentence = {
        1: 'Yes.',
        2: 'No.',
        3: 'Side projects',
        4: 'Hobbies'
    }

    // mines
    const mySentenceSet = {
        'greeting': [
            { label: mySentence[1] },
            { label: mySentence[2] }
        ],
        'goodbye': [
            { label: mySentence[5] },
        ],
        'askingEtc': [
            { label: mySentence[3] },
            { label: mySentence[4] }
        ],
    }

    // yours

    const yourSentenceSet = {
        'ansGreeting': [
            {
                label: yourSentence[1],
                onClick: () => changeConversationContext({ goTo: 'askingEtc' })
            },
            {
                label: yourSentence[2],
                onClick: () => changeConversationContext({ goTo: 'goodbye' })
            }
        ],
        'ansAskingEtc': [
            {
                label: yourSentence[3],
                // goTo: ''
            },
            {
                label: yourSentence[4],
                // goTo: ''
            }
        ],
    }

    const [myDisplayedSentence, setMyDisplayedSentence] = useState([...mySentenceSet['greeting']])
    const [yourDisplayedSentence, setYourDisplayedSentence] = useState([...yourSentenceSet['ansGreeting']])

    const changeConversationContext = ({ goTo }: IchangeConversationContext) => {

        setMyDisplayedSentence([...mySentenceSet['askingEtc']])
        setYourDisplayedSentence([...yourSentenceSet['ansAskingEtc']])
        console.log(myDisplayedSentence, yourDisplayedSentence)
    }

    useEffect(() => {
        // console.log(myDisplayedSentence, yourDisplayedSentence)
    }, [myDisplayedSentence, yourDisplayedSentence])

    return (
        <>
            <Default>
                <ChatLayout>
                    <LeftBubbleList wordingList={myDisplayedSentence} />
                    <RightBubbleList rightWordingList={yourDisplayedSentence} leftWordingList={myDisplayedSentence} />
                    {/* <ChatBubble label='test chat'></ChatBubble> */}
                </ChatLayout>
            </Default>
        </>
    )
}