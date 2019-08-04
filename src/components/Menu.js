import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Modal } from 'semantic-ui-react';


class Menu extends React.Component {


    // toggles between .hidden and .shown classes to show menu or not if button is clicked
    openMenu = () => {

    }

render() {
    return (
        <>
        {/* <Icon name="bars" size="big" className="menu" onCLick={this.openMenu}/> */}
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