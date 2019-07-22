import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Form,
  Modal,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Card,
} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Megan Jones'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='software developer. writer. human.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>About</Menu.Item>
                <Menu.Item as='a'>Recent Projects</Menu.Item>
                {/* <Menu.Item as='a'>Blog</Menu.Item> */}
                <Menu.Item as='a'>
                Contact
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as='a' active>
            Home
          </Menu.Item>
          <Menu.Item as='a'>About</Menu.Item>
          <Menu.Item as='a'>Recent Projects</Menu.Item>
          {/* <Menu.Item as='a'>Blog</Menu.Item>  */}
          <Menu.Item as='a'>Contact</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header textAlign="center" as='h3' style={{ fontSize: '2em' }}>
           I'm a full stack software developer who loves to write <em>almost</em> as much as I love to code.
            </Header>
          </Grid.Column>
          <Grid.Column textAlign="center" floated='right' width={6}>
            <Image bordered circular size='large' src='https://avatars3.githubusercontent.com/u/38929577?s=460&v=4' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Modal
            trigger={ <Button color="black" size='huge'>More about me</Button>}>
                <Segment> 
                <p  style={{ fontSize: '1.33em' }}>Before becoming a software developer, I received my Bachelor's degree in Comparative Literature and English from Indiana University Bloomington, my Master's degree in English Literature from the University of Kansas, and a certificate in Technical Writing from Bellevue College. I currently attend Lambda School's Full Stack Web Development and Computer Science program, which I am projected to finish in early October 2019.</p>
                <p  style={{ fontSize: '1.33em' }}>I have 6 years of experience teaching English as a second language to both children and adults, and teaching writing and composition at the university level. I also have experience managing a winning state election campaign in a competitive district.</p>
                <p  style={{ fontSize: '1.33em' }}>Please feel free to contact me for a full resume or more information.</p>
                </Segment>
            </Modal>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em', margin: '1em' }} vertical>
      <Grid  columns='equal' stackable>
        <Grid.Row textAlign='center'>
        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
        <Segment inverted color="black">
            <Header as='h3' style={{ fontSize: '2em', textAlign: 'left' }}>
             Computer Languages
            </Header>
            <p style={{ fontSize: '1.33em', textAlign: 'left' }}>
            <List>
                <List.Item><List.Icon name="js" size="big"/><List.Content>Javascript</List.Content></List.Item>
                <List.Item><List.Icon name="css3" size="big" /><List.Content>CSS3</List.Content></List.Item>
                <List.Item><List.Icon name="python" size="big" /><List.Content>Python</List.Content></List.Item>
            </List>
            </p>
            <Header as='h3' style={{ fontSize: '2em', textAlign: 'left' }}>
             Natural Languages
            </Header>
            <p style={{ fontSize: '1.33em', textAlign: 'left' }}>
            <List>
                <List.Item><List.Icon size="big" name="language"/><List.Content>Italian</List.Content></List.Item>
                <List.Item><List.Icon size="big" name="language"/><List.Content>Spanish</List.Content></List.Item>
                <List.Item><List.Icon size="big" name="language"/><List.Content>Portuguese</List.Content></List.Item>
                <List.Item><List.Icon size="big" name="language"/><List.Content>Indonesian</List.Content></List.Item>
            </List>
            </p>
            </Segment>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Segment inverted color="black">
            <Header as='h3' style={{ fontSize: '2em', textAlign: 'left' }}>
              Skills
            </Header>
            <p style={{ fontSize: '1.33em', textAlign: 'left' }}>
            <List>
                <List.Item><List.Icon size="big" name="html5" /><List.Content>HTML5</List.Content></List.Item>
                <List.Item><List.Icon size="big" name="react" /><List.Content>React.js</List.Content></List.Item>
                <List.Item><List.Icon size="big" name="node" /><List.Content>Node.js/Express</List.Content></List.Item>
                <List.Item><List.Icon name="code" size="big" /><List.Content>Knex.js</List.Content></List.Item>
                <List.Item><List.Icon name="sass" size="big"/><List.Content>Sass</List.Content></List.Item>
                <List.Item><List.Icon name="less" size="big"/><List.Content>Less</List.Content></List.Item>
                <List.Item><List.Icon name="database" size="big" /><List.Content>SQL and noSQL databases</List.Content></List.Item>
                <List.Item><List.Icon size="big" name="key" /><List.Content>Authentication</List.Content></List.Item>
                <List.Item><List.Icon name="lab" size="big" /><List.Content>Testing</List.Content></List.Item>
                <List.Item><List.Icon name="sync" size="big" /><List.Content>Agile Methodologies</List.Content></List.Item>
                <List.Item><List.Icon name="write" size="big" /><List.Content>Writing</List.Content></List.Item>
                <List.Item><List.Icon name="edit" size="big" /><List.Content>Editing</List.Content></List.Item>
            </List>
            </p>
            </Segment>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Segment inverted color="black">
            <Header as='h3' style={{ fontSize: '2em', textAlign: 'left' }}>
              Interests
            </Header>
            <p style={{ fontSize: '1.33em', textAlign: 'left' }}>
            <List>
                <List.Item><List.Icon name="language" size="big" /><List.Content>Linguistics</List.Content></List.Item>
                <List.Item><List.Icon name="keyboard" size="big" /><List.Content>Natural Language Processing</List.Content></List.Item>
                <List.Item><List.Icon name="computer" size="big" /><List.Content>Web Development</List.Content></List.Item>
                <List.Item><List.Icon name="file alternate outline" size="big"/><List.Content>Effective Documentation</List.Content></List.Item>
                <List.Item><List.Icon name="user" size="big" /><List.Content>Digital Humanities</List.Content></List.Item>
                <List.Item><List.Icon name="university" size="big"/><List.Content>20th Century History</List.Content></List.Item>
                <List.Item><List.Icon name="book" size="big"/><List.Content>Literature</List.Content></List.Item>
                <List.Item><List.Icon name="paint brush" size="big" /><List.Content>Painting</List.Content></List.Item>
            </List>
            </p>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ textAlign: 'center', fontSize: '2em' }}>
            Recent Projects
        </Header>
        <p style={{ fontSize: '1.33em' }}>
         <Card.Group>
             <Card>
                 <Card.Content>
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
                       Life GPA is a task management app designed for 
                     </Card.Description>
                 </Card.Content>
             </Card>
         </Card.Group>
        </p>
      </Container>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ textAlign: 'center', fontSize: '2em' }}>
            Contact Me
        </Header> 
        <Form style={{ fontSize: '1.33em', 
    textAlign: "center"  }}>
            <Form.Input type="text" placeholder="name" /> 
            <Form.Input type="text" placeholder="email" /> 
            <Form.TextArea placeholder="Write message here . . ." type="text" /> 
            <Form.Button color="black">send</Form.Button>
        </Form>
        <p style={{ fontSize: '1.33em' }}>
         
        </p>
      </Container>
    </Segment>
    {/* <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ textAlign: 'center', fontSize: '2em' }}>
            Blog
        </Header>
        
        <p style={{ fontSize: '1.33em' }}>
         
        </p>
      </Container>
    </Segment> */}
    <Segment color="black" inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h4' inverted>
                Megan Jones
              </Header>
              <p>
               software developer. writer. human.
              </p>
              <List link inverted horizontal>
              <List.Item as='a' href='https://github.com/meginks' target="_blank"><List.Icon name="github square" size="big"/></List.Item>
                <List.Item as='a' href="https://www.linkedin.com/in/megan-jones123/" target="_blank"><List.Icon name="linkedin" size="big" /></List.Item>
                <List.Item as='a' href="https://medium.com/@meganjones.dev" target="_blank"><List.Icon name="medium" size="big" /></List.Item>
                <List.Item as='a' target="_blank" href="https://twitter.com/meg_inks"><List.Icon name="twitter square" size="big"/></List.Item>
                <List.Item as='a' href="mailto:meganjones.dev@gmail.com"><List.Icon name="mail square" size="big"/></List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>

              <p>&copy; 2019. All rights reserved.</p>
            
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)
export default HomepageLayout