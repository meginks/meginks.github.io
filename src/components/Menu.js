import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Modal } from 'semantic-ui-react';


class Menu extends React.Component {

render() {
    return (
        <>
        <div className="menu">
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/projects">projects</Link>
        </div>
        </>
    )
    }
}

export default Menu;