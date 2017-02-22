import React from 'react';
import styles from './HamburgerMenu.css';
import Cities from '../../Cities';

let Menu = require('react-burger-menu').slide;


let CitiesList = React.createClass({
    render: function() {
        let citiesList = this.props.cities.map(function(city) {
            return <a style={{display: 'block'}} className="menu-item" href={city.url} >{city.name}</a>;
        });
        return <span>{citiesList}</span>;
    }
});


let HamburgerMenu = React.createClass({
    render: function() {
        return (
            <Menu styles={styles} right>
                <a className="menu-item" target="_blank" href="#" >Donate</a>
                <a className="menu-item" target="_blank" href="https://goo.gl/forms/K2PgnxJTznz06gOq2">Volunteer</a>
                <a className="menu-item" target="_blank" href="#" >Store</a>
                <a className="menu-item" target="_blank" href="#" >Ride Share</a>
                <h3 style={{paddingTop: '20px'}}>Michigan Marches:</h3>
                <CitiesList cities={Cities} />
                <h3 style={{paddingTop: '20px'}}>Global Marches:</h3>
                <a className="menu-item" target="_blank" href="#" >Global Website</a>
            </Menu>
        );
    }
});

export default HamburgerMenu