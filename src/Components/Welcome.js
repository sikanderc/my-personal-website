import React, { Component } from 'react';
import Avatar from 'react-avatar';

class Welcome extends Component {

  render() {

    return (
      <div className="Welcome section">
        <div><Avatar src={process.env.PUBLIC_URL + '/Images/sikander.jpg'} size={200} round={true} /></div>

        <h1 className="welcome-intro">Sikander 'Siki' Chowhan is a full stack web engineer, entreprenuer & all-around good person living in New York City
        <br/>
        <br/>
          <a href="https://linkedin.com/in/sikanderchowhan" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square i-hov" aria-hidden="true"/></a>  <a href="https://medium.com/@sikanderchowhan" target="_blank" rel="noopener noreferrer"><i className="fa fa-medium i-hov" aria-hidden="true"/></a>  <a href="https://github.com/sikanderchowhan" target="_blank" rel="noopener noreferrer"><i className="fa fa-github i-hov" aria-hidden="true"/></a>  <a href="mailto:sikanderchowhan@gmail.com?Subject=Hello%20there!" target="_top"><i className="fa fa-envelope i-hov" aria-hidden="true"/></a>
        <br/>
          <a href="https://drive.google.com" target="_blank" rel="noopener noreferrer"><button className="button resume-button">Resume <i className="fa fa-file-pdf-o" aria-hidden="true"/></button></a>


        </h1>
      </div>
    );
  }
}

export default Welcome;
