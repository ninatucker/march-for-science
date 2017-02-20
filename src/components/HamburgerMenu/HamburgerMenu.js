import React from 'react';
import styles from './HamburgerMenu.css';
import Cities from '../../Cities';

var Menu = require('react-burger-menu').slide;


var CitiesList = React.createClass({
    render: function() {
        var citiesList = this.props.cities.map(function(city) {
            return <a style={{display: 'block'}} className="menu-item" href={city.url} >{city.name}</a>;
        });
        return <span>{citiesList}</span>;
    }
});


let HamburgerMenu = React.createClass({
    render: function() {
        return (
            <Menu styles={styles} right>
                <CitiesList cities={Cities} />
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
            </Menu>
        );
    }
});

export default HamburgerMenu