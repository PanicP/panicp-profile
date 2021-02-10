import React from 'react'
import Default from 'Components/layout/Default'
import ProjectLayout from 'Components/layout/ProjectLayout'
import HobbyContainer from 'Components/hobby/HobbyContainer'

export default () => (
    <>
      <Default>
        <ProjectLayout>
          <HobbyContainer/>
        </ProjectLayout>
      </Default>
    </>
  )