import React from 'react';
import {
    Container,
    Header,
    Segment,
  } from 'semantic-ui-react'

const Blog = () => {
    return (
         <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ textAlign: 'center', fontSize: '2em' }}>
            Blog
        </Header>
        
        <p style={{ fontSize: '1.33em' }}>
         
        </p>
      </Container>
    </Segment> 
    )
}

export default Blog;