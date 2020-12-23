import React from 'react'
import './ChatLayout.scss'

interface DefaultLayout {
  children: React.ReactNode;
  // any other props that come into the component
}

const ChatLayout =  ({ children }: DefaultLayout ) => (
  <div className="chat-layout">
    <div className="empty-space"/>
    <div className="chat-container">
      { children }
    </div>
    <div className="empty-space"/>
  </div>
)

export default ChatLayout