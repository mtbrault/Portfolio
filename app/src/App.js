import React, { Component } from 'react';
import Header from './sections/Header';
import Presentation from './sections/Presentation';
import Skills from './sections/Skills';
import Project from './sections/Project';
import Footer from './sections/Footer';
import Experience from './sections/Experience';
import './assets/css/body.css';

class App extends Component {
    render() {
        return (
            <div>
              <Header />
              <Presentation />
              <Experience />
              <Skills />
              <Project />
              <Footer />
            </div>
        );
    }
}

export default App;
