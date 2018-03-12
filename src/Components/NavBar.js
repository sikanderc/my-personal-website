import React, { Component } from 'react';

class NavBar extends Component {

  toggleMenu = () => {
    var x = document.getElementById("myNav");
    if (x.className === "NavBar") {
      x.className += " responsive";
    } else {
      x.className = "NavBar";
    }
  }

  render() {

    return (
      <div >
        <ul className="NavBar" id="myNav">
          <li className="nav-item nav-name"><a href="#top" className="nav-link">sikander chowhan</a></li>
          <li className="nav-item nav-last"><a href="#footer" className="nav-link">Contact</a></li>
          <li className="nav-item"><a href="#portfolio" className="nav-link">Portfolio</a></li>
          <li className="nav-item"><a href="#work" className="nav-link">Work</a></li>
          <li className="nav-item"><a href="#blog" className="nav-link">Blog</a></li>
          <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
          <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
          <li className="nav-item icon"><a href className="nav-link" onClick={this.toggleMenu}>&#9776;</a></li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
