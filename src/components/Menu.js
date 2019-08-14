import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Modal } from 'semantic-ui-react';


class Menu extends React.Component {

render() {
    return (
        <>
        <div className="menu">
        <Link className="menu-item" to="/">home</Link>
        <Link className="menu-item" to="/about">about</Link>
        <Link className="menu-item" to="/projects">projects</Link>
        <Link className="menu-item" to="/writing">writing</Link>
        </div>
        </>
    )
    }
}

export default Menu;