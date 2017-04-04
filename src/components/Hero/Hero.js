import React, { Component } from 'react';
import styles from './Hero.css';

import Social from '../Social/Social';

class Hero extends Component {
    render() {
        return (
            <section id="banner">
                <div className="inner" style={styles.inner}>
                    <h2>March For Science <span style={{display: 'block'}}>{this.props.city.name}</span></h2>
                    <p>Take a stand for science</p>
                    <img src={this.props.city.logo} style={styles.logo} />
                    <ul className="actions">
                        <li><a href="https://goo.gl/forms/K2PgnxJTznz06gOq2" target="_blank" className="button special">Get Involved!</a></li>
                    </ul>
                    <h3>{this.props.city.hashtag}</h3>
                    <Social city={this.props.city} />
                </div>
            </section>
        );
    }
}

export default Hero;