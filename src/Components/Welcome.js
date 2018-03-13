import React, { Component } from 'react';
import Avatar from 'react-avatar';
import sikiTux from '../Images/sikiTux.jpg'

class Welcome extends Component {

  render() {

    return (
      <div className="Welcome section">
        <div><Avatar className="profile-avatar" src={process.env.PUBLIC_URL + sikiTux} size={200} round={true} /></div>

        <h1 className="welcome-intro">Sikander 'Siki' Chowhan is a web engineer, strategist, entreprenuer, and blockchain aficionado living in New York City.
        <br/>
        <br/>
          <a href="https://linkedin.com/in/sikander-chowhan" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square i-hov" aria-hidden="true"/></a>  <a href="https://medium.com/@sikanderchowhan" target="_blank" rel="noopener noreferrer"><i className="fa fa-medium i-hov" aria-hidden="true"/></a>  <a href="https://github.com/sikanderc" target="_blank" rel="noopener noreferrer"><i className="fa fa-github i-hov" aria-hidden="true"/></a>  <a href="mailto:me@sikanderc.com?Subject=About%20That%20Website..." target="_top"><i className="fa fa-envelope i-hov" aria-hidden="true"/></a>
        <br/>
          <a href="https://drive.google.com/file/d/18ZkeUuTG-K6r5mRGLAuiP3OaeYENKhK5/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button className="button resume-button">Resume</button></a>


        </h1>
      </div>
    );
  }
}

export default Welcome;
