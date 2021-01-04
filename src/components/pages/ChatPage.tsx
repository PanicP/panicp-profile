import React from 'react'
import Default from 'Components/layout/Default'
import ChatLayout from 'Components/layout/ChatLayout'
import LeftBubbleList from 'Components/chat/LeftBubbleList'

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
    const greeting = [
        { label: mySentence[1] }, 
        { label: mySentence[2] }
    ]
    const goodbye = [
        { label: mySentence[5] }, 
    ]
    const askingEtc = [
        { label: mySentence[3] }, 
        { label: mySentence[4] }
    ]

    // yours
    const ansGreeting = [
        { 
            label: yourSentence[1],
            goTo: 'askingEtc'
        }, 
        { 
            label: yourSentence[2] ,
            goTo: 'goodbye'
        }
    ]
    const ansAskingEtc = [
        { 
            label: yourSentence[3],
            // goTo: ''
        }, 
        { 
            label: yourSentence[4] ,
            // goTo: ''
        }
    ]

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