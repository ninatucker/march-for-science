import React, { Component } from 'react';

import Social from '../Social/Social';

import FaGitHub from 'react-icons/lib/fa/github'

class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <Social facebookEvent={this.props.city.facebookEvent} />
            </footer>
        );
    }
}

export default Footer;