import React from 'react';
import styles from './HamburgerMenu.css';
import Cities from '../../Cities';

var Menu = require('react-burger-menu').slide;

const foo = [
    {
        url: 'some',
        name: 'some'
    },
    {
        url: 'something',
        name: 'something'
    }
];

// class City extends React.Component {
//     render() {
//         return (
//             <a id="home" className="menu-item" href="/`${this.props.link}`">{this.props.name}</a>
//         );
//     }
// }

const citiesLinks = ({cities}) => (
    {cities.map(city => (
        <a id="home" className="menu-item" href="/`${city.url}`">{city.name}</a>
    ))}
);

let HamburgerMenu = React.createClass({
    render: function() {
        return (
            <Menu styles={styles} right>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <citiesLinks cities={Cities} />
            </Menu>
        );
    }
});

export default HamburgerMenu