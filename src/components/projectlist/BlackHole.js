import React from 'react';
import {Header, List, Segment} from 'semantic-ui-react';

            /** IMAGE */
             /** CURRENT STATUS */
            /** TECH STACK */
            /** WHAT IT IS */
            /** WHAT I DID */
            /** WHAT I LEARNED */
            /** RELEVANT LINKS */


const BlackHole = () => {
    return (
        <Segment>
        
            <List>
            <Header as="h3">Tech Stack</Header>
                <List.Item>Node.js</List.Item>
                <List.Item>Express</List.Item>
                <List.Item>Postgres</List.Item>
                <List.Item>React.js</List.Item>
                <List.Item>CSS3</List.Item>
            </List>
            </Segment>
    )
}

export default BlackHole;