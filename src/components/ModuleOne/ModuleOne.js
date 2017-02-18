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
                        <h2>April 22, 2017</h2>
                        <p>Join us in city and march to take a stand for science</p>
                    </header>
                </div>
            </section>
        );
    }
}

export default ModuleOne;