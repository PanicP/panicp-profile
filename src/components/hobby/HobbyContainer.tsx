import React from 'react'
import HobbyBox from './HobbyBox'
import './HobbyContainer.scss'

const hobbies = [
  {
    image: '',
    title: 'Workout',
    description: 'My workout routine, goal, motivation, etc...',
  },
  {
    image: '',
    title: 'Osu Mania (Rhythm Game)',
    description: 'Entertainment side of my life.',
  }
]

export default () => (
  <div className="hobby-container">
    <div className="back-button">
      <div>
        &lt; Back to chat
      </div>
    </div>
    <div className="hobby-header">
      <div className="hobby-header-title">
        Hobbies
      </div>
    </div>
    <div className="hobby-list">
      {hobbies.map((data, index) => (
        <HobbyBox
          key={`hobby-box-${index}`}
          image={data.image ? data.image : ''}
          title={data.title}
          description={data.description}
        />
      ))}
    </div>
  </div>
)