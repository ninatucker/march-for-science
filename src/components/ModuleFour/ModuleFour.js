import React, { Component } from 'react';

class Hero extends Component {
    render() {
        return (
            <section id="cta" className="wrapper style4">
                <div className="inner">
                    <header>
                        <h2>Arcue ut vel commodo</h2>
                        <p>Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet eleifend fringilla.</p>
                    </header>
                    <ul className="actions vertical">
                        <li><a href="#" className="button fit special">Something!</a></li>
                        <li><a href="#" className="button fit">Learn More</a></li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Hero;