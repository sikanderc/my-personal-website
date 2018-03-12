import React, { Component } from 'react';
import Welcome from './Components/Welcome'
import Projects from './Components/Projects'
import Work from './Components/Work'
import Portfolio from './Components/Portfolio'
import Education from './Components/Education'
import Blog from './Components/Blog'
import About from './Components/About'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
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
        <p className="heading" id="projects"><strong>Recent Projects</strong></p>
          <Projects />
        <p className="heading" id="about"><strong>About Me</strong></p>
          <About />
        <p className="heading" id="blog"><strong>My Blog on Medium</strong></p>
          <Blog />
        <p className="heading" id="work"><strong>Work History</strong></p>
          <Work />
        <p className="heading" id="education"><strong>Education History</strong></p>
          <Education />
        <p className="heading" id="portfolio"><strong>Portfolio</strong></p>
          <Portfolio />
        <p className="heading" id="footer"></p>
          <Footer />
      </div>
    );
  }
}

export default App;
