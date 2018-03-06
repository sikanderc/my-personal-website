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
import FaceOfCompassion from './Components/FaceOfCompassion'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />
          <FaceOfCompassion />
          <Welcome />
          <div className="down-arrow">
          <img src={arrow} alt="Sroll"  width="50px"/>
          </div>
        <p className="heading" id="projects">Recent Projects</p>
          <Projects />
        <p className="heading" id="about">About Me</p>
          <About />
        <p className="heading" id="blog">Blog</p>
          <Blog />
        <p className="heading" id="work">Work History</p>
          <Work />
        <p className="heading" id="work">Education History</p>

        <p className="heading" id="work">Instagram</p>
          <Instagram />
        <p className="heading" id="footer"></p>
          <Footer />
      </div>
    );
  }
}

export default App;
