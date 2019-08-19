import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Modal, Dropdown, } from 'semantic-ui-react';


class Menu extends React.Component {

render() {
    return (
        <div className="menu">
        <Dropdown text="menu">
        <Dropdown.Menu>
        <Dropdown.Item className="menu-item" as={Link} to="/">
        home
        </Dropdown.Item>
        <Dropdown.Item className="menu-item" as={Link} to="/about" >
        about
        </Dropdown.Item>
        <Dropdown.Item className="menu-item" as={Link} to="/projects">
        projects
        </Dropdown.Item>
        <Dropdown.Item className="menu-item" as={Link} to="/writing">
        writing
        </Dropdown.Item>
        <Dropdown.Item  className="menu-item" as={Link} to="/contact">
        contact
        </Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        </div>
    )
    }
}

export default Menu;