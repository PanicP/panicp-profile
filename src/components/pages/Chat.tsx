import React from 'react'
import Default from 'Components/layout/Default'
import ChatBubble from 'Components/chat/Bubble'

export default () => (
    <>
        <Default>
            <div>
                <ChatBubble label='test chat'></ChatBubble>
            </div>
        </Default>
    </>
)