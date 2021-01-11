import React from 'react'

// import GithubPNG from '../../static/pictures/github.png'
// import LinkedPNG from '../../static/pictures/linkedin.png'
import './ChatLayout.scss'

interface DefaultLayout {
  children: React.ReactNode
  // any other props that come into the component
}

const ChatLayout = ({ children }: DefaultLayout) => (
  <div className="chat-layout">
    <div className="empty-space" />
    <div className="chat-container">
      {children}
    </div>
    <div className="empty-space">
      <div>
        <img src={'../../static/pictures/github.png'} />
        <img src={'../../static/pictures/linkedin.png'} />
      </div>
    </div>
  </div>
)

export default ChatLayout