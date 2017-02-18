import React from 'react';
import styles from './HamburgerMenu.css';

var Menu = require('react-burger-menu').slide;

var HamburgerMenu = React.createClass({
    render: function() {
        return (
            <Menu styles={styles} right>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
            </Menu>
        );
    }
});

export default HamburgerMenu