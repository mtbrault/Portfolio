import React, { Component } from 'react';
import Particles from '../component/Particles';
import '../assets/css/header.css';

class Header extends Component {
    render() {
        return (
            <header id="intro">
                <div id="background-filter"></div>
                <h1 id="header-text">
                    Matthieu BRAULT <br />
                    <small>Développeur Full Stack</small>
                </h1>
                <Particles />
            </header>
        );
    }
}

export default Header;
