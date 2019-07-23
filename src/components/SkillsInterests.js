import React from 'react';
import {
    Grid,
    Header,
    List,
    Segment,
  } from 'semantic-ui-react'

const SkillsInterests = () => {
    return (
        <Grid columns='equal' stackable style={{ padding: '0em', margin: '1em' }}>
        <Grid.Column style={{ paddingBottom: '2.5em', paddingTop: '2.5em' }}>
        <Segment inverted color="black">
            <Header as='h3' style={{ fontSize: '2em', textAlign: 'left' }}>
             Computer Languages
            </Header>
            <div style={{ fontSize: '1.33em', textAlign: 'left' }}>
            <List>
                <List.Item><List.Icon name="js" size="big"/><List.Content>Javascript</List.Content></List.Item>
                <List.Item><List.Icon name="css3" size="big" /><List.Content>CSS3</List.Content></List.Item>
                <List.Item><List.Icon name="python" size="big" /><List.Content>Python</List.Content></List.Item>
            </List>
            </div>
            <Header as='h3' style={{ fontSize: '2em', textAlign: 'left' }}>
             Natural Languages
            </Header>
            <div style={{ fontSize: '1.33em', textAlign: 'left' }}>
            <List>
                <List.Item><List.Icon size="big" name="language"/><List.Content>Italian</List.Content></List.Item>
                <List.Item><List.Icon size="big" name="language"/><List.Content>Spanish</List.Content></List.Item>
                <List.Item><List.Icon size="big" name="language"/><List.Content>Portuguese</List.Content></List.Item>
                <List.Item><List.Icon size="big" name="language"/><List.Content>Indonesian</List.Content></List.Item>
            </List>
            </div>
            </Segment>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '2.5em', paddingTop: '2.5em' }}>
            <Segment inverted color="black">
            <Header as='h3' style={{ fontSize: '2em', textAlign: 'left' }}>
              Skills
            </Header>
            <div style={{ fontSize: '1.33em', textAlign: 'left' }}>
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
            </div>
            </Segment>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '2.5em', paddingTop: '2.5em' }}>
            <Segment inverted color="black">
            <Header as='h3' style={{ fontSize: '2em', textAlign: 'left' }}>
              Interests
            </Header>
            <div style={{ fontSize: '1.33em', textAlign: 'left' }}>
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
            </div>
            </Segment>
          </Grid.Column>
      </Grid>
   
    )
}

export default SkillsInterests;