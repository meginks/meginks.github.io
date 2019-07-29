import React from 'react';
import { Link } from 'react-router-dom';


const Menu = () => {
    return (
        <ul className="menu">
        <li><Link className="" to="/">home </Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/projects">projects</Link></li>
    </ul>
    )
}

export default Menu;