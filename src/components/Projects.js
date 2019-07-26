import React, {Component} from 'react';
import {
    Container,
    Header,
    Segment,
    Modal,
    Grid, 
    Card,
    List, 
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
        <div style={{ fontSize: '1.33em', textAlign: 'center' }}>
      <Grid stackable width={15}>
          <Grid.Column width={5}>
                <Modal
                trigger={
               <Segment color="black" inverted>
                <Image src="https://images.unsplash.com/photo-1524412529635-a258ed66c010?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=985&q=80" alt="tacos" />
                <Header>Tago Log</Header>
                </Segment>}
                >
                    Test
                </Modal>
                <Modal trigger={
            <Segment color="black" inverted>
                <Image src="https://images.unsplash.com/photo-1551836022-b06985bceb24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="recruiter" />
               <Header>Recruiter Rules</Header>
               </Segment>}>
                   Test
               </Modal>
               </Grid.Column>

               <Grid.Column width={5}>
                   <Modal trigger={
                <Segment color="black" inverted>
               <Image src="https://images.unsplash.com/photo-1544216717-3bbf52512659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="2 women exercising" />
               <Header>Wellness Bet</Header>
               </Segment>}>
                   Test
               </Modal>
              <Modal trigger={
               <Segment inverted color="black">
               <Image src="https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" alt="black hole" />
               <Header>Black Hole</Header>
               </Segment>}>
                   Test
               </Modal>
               </Grid.Column>

               <Grid.Column width={5}>
                   <Modal trigger={
               <Segment inverted color="black">
               <Image src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80" alt="checklist" />
                <Header>Life GPA</Header>
                </Segment>}>
                    Test
                </Modal>
                <Modal trigger={
                <Segment inverted color="black">
                <Image src="https://images.unsplash.com/photo-1549354324-290af3126793?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="school" />
                <Header>International Rural School Report</Header>
                </Segment>}>
                    Test
                </Modal>
                </Grid.Column>
                </Grid>
            </div>
      </Container>
    )
};

  export default Projects;