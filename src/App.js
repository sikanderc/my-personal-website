import React, { Component } from 'react';
import Welcome from './Components/Welcome'
import Projects from './Components/Projects'
import Work from './Components/Work'
import Blog from './Components/Blog'
import About from './Components/About'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import arrow from './Images/arrow.gif'
import ScrollableAnchor from 'react-scrollable-anchor'
import Instagram from './Components/Instagram'

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
        <h2 className="heading" id="work">Instagram</h2>
          <Instagram />
        <h2 className="heading" id="about">ABOUT</h2>
          <About />
        <h2 className="heading" id="blog">BLOG</h2>
          <Blog />
        <h2 className="heading" id="work">WORK</h2>
          <Work />
        <h2 className="heading" id="footer"></h2>
          <Footer />
      </div>
    );
  }
}

export default App;
