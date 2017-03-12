import React, { Component } from 'react';
import '../../assets/css/fonts.css';
import '../../assets/css/App.css';
import styles from './Social.css';

import FaFacebook from 'react-icons/lib/fa/facebook';
import FaGlobe from 'react-icons/lib/fa/globe';
import FaMapMarker from 'react-icons/lib/fa/map-marker';
import FaGitHub from 'react-icons/lib/fa/github';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaEmail from 'react-icons/lib/fa/envelope';

class Twitter extends Component {
    render() {
        if (this.props.twitter) {
            const url = `http://www.twitter.com/${this.props.twitter}`;
            return(
                <li style={styles.listItem}>
                    <a style={styles.listLink} target="_blank" href={url}><FaTwitter /></a>
                </li>
            )
        } else {
            return(
                <span></span>
            )
        }
    }
}

class Email extends Component {
    render() {
        if (this.props.email) {
            const url = `mailto:${this.props.email}`;
            return(
                <li style={styles.listItem}>
                    <a style={styles.listLink} target="_blank" href={url}><FaEmail /></a>
                </li>
            )
        } else {
            return(
                <span></span>
            )
        }
    }
}

class Social extends Component {
    render() {
        return (
            <ul style={styles.list}>
                <li style={styles.listItem}>
                    <a style={styles.listLink} target="_blank" href={this.props.city.facebookEvent}><FaFacebook /></a>
                </li>
                <li style={styles.listItem}>
                    <a style={styles.listLink} target="_blank" href="https://www.marchforscience.com/"><FaGlobe /></a>
                </li>
                <li style={styles.listItem}>
                    <a style={styles.listLink} target="_blank" href="#"><FaMapMarker /></a>
                </li>
                <li style={styles.listItem}>
                    <a style={styles.listLink} target="_blank" href="https://github.com/marchforsciencemi/march-for-science">
                        <FaGitHub />
                    </a>
                </li>
                <Twitter twitter={this.props.city.twitter} />
                <Email email={this.props.city.email} />
            </ul>
        );
    }
}

export default Social;