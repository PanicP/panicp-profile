import React from 'react'
import Default from 'Components/layout/Default'
import ProjectLayout from 'Components/layout/ProjectLayout'
import ProjectBox from 'Components/project/ProjectBox'
import ProjectContainer from 'Components/project/ProjectContainer'

export default () => (
  <>
    <Default>
      <ProjectLayout>
        <ProjectContainer/>
      </ProjectLayout>
    </Default>
  </>
)