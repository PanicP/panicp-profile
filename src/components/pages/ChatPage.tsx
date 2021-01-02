import React from 'react'
import Default from 'Components/layout/Default'
import ChatLayout from 'Components/layout/ChatLayout'
import LeftBubbleList from 'Components/chat/LeftBubbleList'

export default () => {
    const mySentence = {
        1: 'Welcome to my simple portfolio.',
        2: 'Do you want to know something about me ?',
        3: 'So, I have some side projects and my hobbies.',
        4: 'Which one do you want to see ?'
    }

    const yourSentence = {
        1: 'Yes.',
        2: 'No.',
        3: 'Side projects',
        4: 'Hobbies'
    }

    // mines
    const greeting = [ mySentence[1], mySentence[2] ]
    const askingEtc = [ mySentence[3], mySentence[4] ]

    // yours
    const ansGreeting = [ yourSentence[1], yourSentence[2] ]
    const ansAskingEtc = [ mySentence[3], mySentence[4] ]

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