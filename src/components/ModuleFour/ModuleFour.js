import React, { Component } from 'react';

class Hero extends Component {
    render() {
        return (
            <section id="cta" className="wrapper style4">
                <div className="inner">
                    <header>
                        <h2>Do you want to help?</h2>
                        <p>
                            We are seeking marchers, volunteers, and organizers to all help make this a successful
                            event.
                        </p>
                    </header>
                    <ul className="actions vertical">
                        <li><a href="https://goo.gl/forms/K2PgnxJTznz06gOq2" target="_blank" className="button fit special">Volunteer</a></li>
                        <li><a href={this.props.city.facebookEvent} target="_blank" className="button fit">March with us</a></li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Hero;