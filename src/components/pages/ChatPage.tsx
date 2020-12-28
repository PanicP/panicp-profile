import React from 'react'
import Default from 'Components/layout/Default'
import ChatBubble from 'Components/chat/Bubble'
import ChatLayout from 'Components/layout/ChatLayout'
import LeftBubbleList from 'Components/chat/LeftBubbleList'

export default () => (
    <>
        <Default>
            <ChatLayout>
                <LeftBubbleList wordingList={['test1', 'test2', 'test3']} />
                {/* <ChatBubble label='test chat'></ChatBubble> */}
            </ChatLayout>
        </Default>
    </>
)