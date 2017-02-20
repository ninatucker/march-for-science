import React, { Component } from 'react';
import logo from '../../assets/img/logo-mi.png';
import styles from './Hero.css';

import Social from '../Social/Social';

class Hero extends Component {
    render() {
        return (
            <section id="banner">
                <div className="inner" style={styles.inner}>
                    <h2>March For Science <span style={{display: 'block'}}>{this.props.city.name}</span></h2>
                    <p>Take a stand for science</p>
                    <img src={logo} style={styles.logo} />
                    <ul className="actions">
                        <li><a href="#" className="button special">Call to Action!</a></li>
                    </ul>
                    <h3>{this.props.city.hashtag}</h3>
                    <Social facebookEvent={this.props.city.facebookEvent} />
                </div>

                <a href="#one" className="more scrolly">Learn More</a>
            </section>
        );
    }
}

export default Hero;