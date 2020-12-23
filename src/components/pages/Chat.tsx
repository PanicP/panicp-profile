import React from 'react'
import Default from 'Components/layout/Default'
import ChatBubble from 'Components/chat/Bubble'
import ChatLayout from 'Components/layout/ChatLayout'

export default () => (
    <>
        <Default>
            <ChatLayout>
                <ChatBubble label='test chat'></ChatBubble>
            </ChatLayout>
        </Default>
    </>
)