import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div>
        <ul className="NavBar">

          <li className="nav-item nav-name">sikander chowhan</li>
          <li className="nav-item nav-last"><a href="#footer" className="nav-link">Contact</a></li>
          <li className="nav-item"><a href="#work" className="nav-link">Work</a></li>
          <li className="nav-item"><a href="#blog" className="nav-link">Blog</a></li>
          <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
          <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
