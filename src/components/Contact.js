import React from 'react';
import {
  
    Container,
  
    Header,
  
    Form,
  
  } from 'semantic-ui-react'

class Contact extends React.Component {
 
 
 render() {
    return (
     <div style={{ padding: '8em 0em' }}>
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
      </div>
    )
 }
}

export default Contact;