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
import SkillsInterests from './SkillsInterests';
import Projects from './Projects.js';

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
        marginBottom: '.5em',
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
                <Menu.Item>
                <Icon name="code" size="large"/>
                <Icon name="pencil" size="large"/>
                <Icon name="user" size="large"/>
                </Menu.Item>
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
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
                  <Icon name='sidebar' size="big" />
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
  
      <Grid  style={{ padding: '8em 0em' }} container stackable verticalAlign='middle'>
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
            trigger={ <Button color="black" size='huge'>more about me</Button>}>
                <Segment style={{ padding: '5em' }}> 
                <Header as="h3">More about me. . . </Header>
                <p  style={{ fontSize: '1.33em' }}>Before becoming a software developer, I received my Bachelor's degree in Comparative Literature and English from Indiana University Bloomington, my Master's degree in English Literature from the University of Kansas, and a certificate in Technical Writing from Bellevue College. I currently attend Lambda School's Full Stack Web Development and Computer Science program, which I am projected to finish in early October 2019.</p>
                <p  style={{ fontSize: '1.33em' }}>I have 6 years of experience teaching English as a second language to both children and adults, and I taught writing and composition at the university level for two years. I also have experience managing a winning state election campaign in a competitive district.</p>
                <p  style={{ fontSize: '1.33em' }}>
                  For as long as I can remember, I've always been fascinated by language. As a child, I tried to learn as many other languages as I could (human ones that is), so in addition to increasing my ability to communicate with others with whom I would otherwise be unable, I learned how to learn syntax and structure. It was only a matter of time before that linguistic interest would extend to computer languages as well. Now, I'm particularly interested in the intersections between natural and computer languages.
                </p>
                <p  style={{ fontSize: '1.33em' }}>Please feel free to contact me for a full resume and/or more information.</p>
                </Segment>
            </Modal>

          </Grid.Column>
        </Grid.Row>
      </Grid>
   
    <SkillsInterests />
    <Projects />
  
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