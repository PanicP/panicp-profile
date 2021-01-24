import React from 'react'
import Default from 'Components/layout/Default'
import ProjectLayout from 'Components/layout/ProjectLayout'
import ProjectBox from 'Components/project/ProjectBox'
import ProjectContainer from 'Components/project/ProjectContainer'

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 1, 1, 1, 1, 1]

export default () => (
  <>
    <Default>
      <ProjectLayout>
        <ProjectContainer/>
      </ProjectLayout>
    </Default>
  </>
)