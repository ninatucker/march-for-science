import React, { Component } from 'react';
import '../../assets/css/fonts.css';
import '../../assets/css/App.css';
import styles from './ModuleOne.css';

class ModuleOne extends Component {
    render() {
        return (
            <section id="one" style={styles.header}>
                <div style={styles.inner}>
                    <header className="major">
                        <h2>{this.props.city.date}</h2>
                        <p>Join us in {this.props.city.name} and march to take a stand for science</p>
                        <p>{this.props.city.time} at {this.props.city.location}</p>
                    </header>
                </div>
            </section>
        );
    }
}

export default ModuleOne;