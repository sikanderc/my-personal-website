import React, { Component } from 'react';
import Welcome from './Components/Welcome'
import Projects from './Components/Projects'
import Work from './Components/Work'
import FailedProjects from './Components/FailedProjects'
import Education from './Components/Education'
import Blog from './Components/Blog'
import About from './Components/About'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
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
          <br/>
          <br/>
          <br/>
          <br/>
          <Welcome />
        <p className="heading" id="projects">Recent Projects</p>
          <Projects />
        <p className="heading" id="about">About Me</p>
          <About />
        <p className="heading" id="blog">My Blog on Medium</p>
          <Blog />
        <p className="heading" id="work">Work History</p>
          <Work />
        <p className="heading" id="education">Education History</p>
          <Education />
        <p className="heading" id="failedProjects">A Few Failed Projects...</p>
          <FailedProjects />
        <p className="heading" id="instagram">Instagram</p>
          <Instagram />
        <p className="heading" id="footer"></p>
          <Footer />
      </div>
    );
  }
}

export default App;
