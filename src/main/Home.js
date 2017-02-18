import React, { Component } from 'react';
import '../assets/css/fonts.css';
import logo from '../assets/img/logo.jpg';
import '../assets/css/App.css';
import styles from './Home.css';

class Home extends Component {
    render() {
        return (
            <div style={styles.body}>
                <div style={styles.header}>
                    <img src={logo} style={styles.logo} alt="logo" />
                </div>
                <div style={styles.hero}>
                    <div style={styles.heroOverlay}>
                        <h2 style={styles.heroText}>March for Science Michigan</h2>
                    </div>
                </div>
                <p className="Home-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default Home;
