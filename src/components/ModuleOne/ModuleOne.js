import React, { Component } from 'react';
import '../../assets/css/fonts.css';
import '../../assets/css/App.css';
import styles from './ModuleOne.css';

import Map from '../Map/Map';

class ModuleOne extends Component {
    render() {
        return (
            <section id="one" style={styles.header}>
                <div style={styles.inner}>
                    <header className="major">
                        <h2>
                            {this.props.city.date} <br />
                            <span style={{display: 'block'}}>{this.props.city.time}</span>
                        </h2>
                        <p>Join us in {this.props.city.name} and march to take a stand for science</p>
                        <h4>Location:</h4>
                        <p>{this.props.city.location}</p>
                        <p>{this.props.city.address}</p>
                        <Map map={this.props.city.mapIframe} />
                    </header>
                </div>
            </section>
        );
    }
}

export default ModuleOne;