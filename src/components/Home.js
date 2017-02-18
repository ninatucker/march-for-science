import React, { Component } from 'react';
import '../assets/css/fonts.css';
import '../assets/css/App.css';
import styles from '../components/Home.css';
import ModuleOne from './ModuleOne/ModuleOne';
import ModuleTwo from './ModuleTwo/ModuleTwo';
import ModuleThree from './ModuleThree/ModuleThree';
import ModuleFour from './ModuleFour/ModuleFour';
import Hero from './Hero/Hero';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import Footer from './Footer/Footer';

class Home extends Component {
    render() {
        return (
          <div id="page-wrapper">
              <HamburgerMenu />
              <Hero />
              <ModuleOne />
              <ModuleTwo />
              <ModuleThree />
              <ModuleFour />
              <Footer />
          </div>
        );
    }
}

export default Home;
