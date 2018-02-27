import React, { Component } from 'react';
import NavBar from './Components/NavBar'
import Welcome from './Components/Welcome'
import Projects from './Components/Projects'
import Work from './Components/Work'
import Blog from './Components/Blog'
import About from './Components/About'
import Footer from './Components/Footer'

import arrow from './Images/arrow.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <NavBar />
        <Welcome />

        <div className="down-arrow">
          <img src={arrow} alt="Sroll"  width="50px"/>
        </div>

        <h2 className="heading" id="projects">PROJECTS</h2>
        <Projects />

        <h2 className="heading" id="about">ABOUT</h2>
        <About />

        <h2 className="heading" id="blog">BLOG</h2>
        <Blog />

        <h2 className="heading" id="work">WORK</h2>
        <Work />

        <h2 className="heading" id="footer">LIKE WHAT YOU SEE?</h2>
        <Footer />
        
      </div>
    );
  }
}

export default App;
