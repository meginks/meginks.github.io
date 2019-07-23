import React from 'react';
import {
    Container,
    Header,
    Segment,
    Card,
  } from 'semantic-ui-react'

const Projects = () => {
    return (
        <Segment style={{ padding: '4em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ textAlign: 'center', fontSize: '2em' }}>
            Recent Projects
        </Header>
        <div style={{ fontSize: '1.33em' }}>
         <Card.Group>
             <Card>
                 <Card.Content >
                     <Card.Header>
                         Recruiter Rules
                     </Card.Header>
                     <Card.Description>
                        Recruiter Rules is a rule engine built for recruiters, so they can create rules for when to send candidate information where, and then automatically route candidate information to the correct person's email according to their own rules.
                     </Card.Description>
                 </Card.Content>
             </Card>
             <Card>
                 <Card.Content>
                     <Card.Header>
                         Life GPA
                     </Card.Header>
                     <Card.Description>
                       Life GPA is a task management app.
                     </Card.Description>
                 </Card.Content>
             </Card>
         </Card.Group>
        </div>
      </Container>
    </Segment>
    )
} 

 export default Projects;