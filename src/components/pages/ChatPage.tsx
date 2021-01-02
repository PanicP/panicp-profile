import React from 'react'
import Default from 'Components/layout/Default'
import ChatLayout from 'Components/layout/ChatLayout'
import LeftBubbleList from 'Components/chat/LeftBubbleList'

export default () => {
    const mySentence = {
        1: 'Welcome to my simple portfolio.',
        2: 'Do you want to know something about me ?',
    }

    const yourSentence = {
        1: 'Yes.',
        2: 'No.'
    }

    const greeting = [ mySentence[1], mySentence[2] ]

    return (
        <>
            <Default>
                <ChatLayout>
                    <LeftBubbleList wordingList={greeting} />
                    {/* <ChatBubble label='test chat'></ChatBubble> */}
                </ChatLayout>
            </Default>
        </>
    )
}