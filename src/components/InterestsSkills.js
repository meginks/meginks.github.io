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

  const InterestsSkills = () => {
      return (
        <Grid columns='equal' stackable>
            <Grid.Column>
                <Header as="h2">Computer Languages</Header>
            <Item.Group>
                <Item>
                <Item.Content>
                    <Item.Header>
                    <Icon name="js" size="big" style={{marginLeft: '1rem', marginRight: '1rem'}} />
                        Javascript
                    </Item.Header>
                </Item.Content>
                </Item>
                <Item>
                    <Item.Content>
                        <Item.Header>
                            <Icon name="css3" size="big" style={{marginLeft: '1rem', marginRight: '1rem'}}  /> 
                            CSS3
                        </Item.Header>
                    </Item.Content>
                </Item>
                <Item>
                    <Item.Content>
                        <Item.Header>
                            <Icon name="python" size="big" style={{marginLeft: '1rem', marginRight: '1rem'}} /> 
                            Python
                        </Item.Header>
                    </Item.Content>
                </Item>
            </Item.Group>
            <Header as="h2">Natural Languages</Header>
            <Item.Group>
                <Item>
                <Item.Content>
                    <Item.Header>
                        <Icon name="language" size="big" style={{marginLeft: '1rem', marginRight: '1rem'}}  />
                        Italian
                    </Item.Header>
                </Item.Content>
                </Item>
                <Item>
                <Item.Content>
                    <Item.Header>
                        <Icon name="language" size="big" style={{marginLeft: '1rem', marginRight: '1rem'}}  />
                        Spanish
                    </Item.Header>
                </Item.Content>
                </Item>
                <Item>
                <Item.Content>
                    <Item.Header>
                        <Icon name="language" size="big" style={{marginLeft: '1rem', marginRight: '1rem'}}  />
                        Portuguese
                    </Item.Header>
                </Item.Content>
                </Item>
                <Item>
                <Item.Content>
                    <Item.Header>
                    <Icon name="language" size="big" style={{marginLeft: '1rem', marginRight: '1rem'}}  />
                        Indonesian
                    </Item.Header>
                </Item.Content>
                </Item>
            </Item.Group>
            </Grid.Column>
            <Grid.Column>
                <Header as="h2">Skills</Header>
            <Item.Group>
                <Item>
                <Item.Content>
                    <Item.Header>
                    <Icon name="html5" size="big" style={{marginLeft: '1rem', marginRight: '1rem'}}  />
                        HTML5
                    </Item.Header>
                </Item.Content>
                </Item>
                <Item>
                <Item.Content>
                    <Item.Header>
                    <Icon name="react" size="big" style={{marginLeft: '1rem', marginRight: '1rem'}}  />
                        React
                    </Item.Header>
                </Item.Content>
                </Item>
                <Item>
                <Item.Content>
                    <Item.Header>
                    <Icon name="angular" size="big" style={{marginLeft: '1rem', marginRight: '1rem'}}  />
                        Angular
                    </Item.Header>
                </Item.Content>
                </Item>
                <Item>
                <Item.Content>
                    <Item.Header>
                    <Icon name="node" size="big" style={{marginLeft: '1rem', marginRight: '1rem'}}  />
                        Node / Express
                    </Item.Header>
                </Item.Content>
                </Item>
                <Item>
                <Item.Content>
                    <Item.Header>
                    <Icon name="code" size="big" style={{marginLeft: '1rem', marginRight: '1rem'}}  />
                        Knex
                    </Item.Header>
                </Item.Content>
                </Item>
                <Item>
                <Item.Content>
                    <Item.Header>
                    <Icon name="sass" size="big" style={{marginLeft: '1rem', marginRight: '1rem'}} />
                        Sass
                    </Item.Header>
                </Item.Content>
                </Item>
                <Item>
                <Item.Content>
                    <Item.Header>
                    <Icon name="less" size="big" style={{marginLeft: '1rem', marginRight: '1rem'}} />
                        Less
                    </Item.Header>
                </Item.Content>
                </Item>
                <Item>
                <Item.Content>
                    <Item.Header>
                    <Icon name="html5" size="big" style={{marginLeft: '1rem', marginRight: '1rem'}} />
                        HTML5
                    </Item.Header>
                </Item.Content>
                </Item>
                <Item>
                <Item.Content>
                    <Item.Header>
                    <Icon name="pencil" size="big" style={{marginLeft: '1rem', marginRight: '1rem'}} />
                        writing
                    </Item.Header>
                </Item.Content>
                </Item>
                <Item>
                <Item.Content>
                    <Item.Header>
                    <Icon name="edit" size="big" style={{marginLeft: '1rem', marginRight: '1rem'}} />
                        editing
                    </Item.Header>
                </Item.Content>
                </Item>
                <Item>
                <Item.Content>
                    <Item.Header>
                    <Icon name="pencil" size="big" style={{marginLeft: '1rem', marginRight: '1rem'}} />
                        writing
                    </Item.Header>
                </Item.Content>
                </Item>
                <Item>
                <Item.Content>
                    <Item.Header>
                    <Icon name="pencil" size="big" style={{marginLeft: '1rem', marginRight: '1rem'}} />
                        writing
                    </Item.Header>
                </Item.Content>
                </Item>

            </Item.Group>
            </Grid.Column>
            <Grid.Column>
                <Header as="h2">Interests</Header>
            <Item.Group>
                <Item>
                <Item.Content>
                    <Item.Header>
                    <Icon name="" size="big" style={{marginLeft: '1rem', marginRight: '1rem'}} />
                        Javascript
                    </Item.Header>
                </Item.Content>
                </Item>
            </Item.Group>
            </Grid.Column>
            </Grid>
      )
  }

  export default InterestsSkills;