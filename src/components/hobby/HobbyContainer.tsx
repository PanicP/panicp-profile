import React from 'react'
import HobbyBox from './HobbyBox'
import { history } from 'History'
import './HobbyContainer.scss'
import WorkoutImage from 'Static/pictures/gym.jpg'

const hobbies = [
  {
    image: WorkoutImage,
    title: 'Workout',
    description: 'My workout routine, goal, motivation, etc...',
  },
  {
    image: null,
    title: 'Osu Mania (Rhythm Game)',
    description: 'Entertainment side of my life.',
  }
]

export default () => (
  <div className="hobby-container">
    <div className="back-button">
      <div onClick={() => history.push('/')}>
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
          image={data.image ? data.image : null}
          title={data.title}
          description={data.description}
        />
      ))}
    </div>
  </div>
)