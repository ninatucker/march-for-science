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
                        <h2>Some Header</h2>
                        <p>some text.</p>
                    </header>
                </div>
            </section>
        );
    }
}

export default ModuleOne;