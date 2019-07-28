import React, {Component} from 'react';
import {
    Container,
    Header,
    Segment,
    Modal,
    Grid, 
    Card,
    List, 
    Item,
    Button, 
    Image,
    Icon
  } from 'semantic-ui-react';
  import {Link} from 'react-router-dom';

const Projects = () => {
  
    return (
      
      <Container text style={{padding: '1em 0', margin: '1em 0'}}>
        <Header as='h3' centered style={{ textAlign: 'center', fontSize: '2em' }}>
            Projects
        </Header>
        <Item.Group>
        <Item>
            <Item.Image src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" tiny alt="business meeting"/> 
            <Item.Content>
                <Item.Header>
                    Recruiter Rules
                </Item.Header>
                <Item.Meta>
                Lambda School Labs Project
                </Item.Meta>
                <Item.Description>

                </Item.Description>
                <Item.Extra>

                </Item.Extra>
            </Item.Content>
        </Item>
        <Item>
            <Item.Image src="https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80" tiny alt="trash" /> 
            <Item.Content>
                <Item.Header>
                Black Hole
                </Item.Header>
                <Item.Meta>
                March 2019 Lambda School Build Week Project
                </Item.Meta>
                <Item.Description>
                    
                </Item.Description>
                <Item.Extra>
           
                </Item.Extra>
            </Item.Content>
        </Item>

        <Item>
            <Item.Image src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" alt="to do list" tiny /> 
            <Item.Content>
                <Item.Header>
                Life GPA
                </Item.Header>
                <Item.Meta>
                Feb 2019 Lambda School Build Week Project 
                </Item.Meta>
                <Item.Description>

                </Item.Description>
                <Item.Extra>

                </Item.Extra>
            </Item.Content>
        </Item>
 
        <Item>
            <Item.Image src="https://images.unsplash.com/photo-1549354324-290af3126793?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="school kids" tiny /> 
            <Item.Content>
                <Item.Header>
                International Rural School Report
                </Item.Header>
                <Item.Meta>
                Jan 2019 Lambda School Build Week Project
                </Item.Meta>
                <Item.Description>

                </Item.Description>
                <Item.Extra>

                </Item.Extra>
            </Item.Content>
        </Item>
        </Item.Group>
   
      </Container>
    )
};

  export default Projects;