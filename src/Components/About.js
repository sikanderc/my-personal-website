import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="About section">
        <h1 className="about-intro"><strong>Sikander Chowhan</strong>:</h1>
        <h2 className="about-intro2">Passionate about decentralization.</h2>
        <p className="about-item">Strategist and Full Stack Web Developer with a penchant for smiling. With experience in Ruby on Rails and JavaScript based programming, I discovered web development through my work in the non-profit world. By rebranding and launching a couple of different non-profits, I was able to better my community, but felt a lag in my own technical abilities. Luckily I was able to address that gap via the Flatiron School. From prior experience, I bring strong skills in team-building, project management, product management, compassionate interaction, and adaptability. Additionally, my positivity and willingness to address projects will only serve to support any size firm. Always ready to learn new things and further my own experience. Heavily interested in blockchain.</p>
        <p className="about-item">#hodl<br/><br/><a href="mailto:sikanderchowhan@gmail.com?Subject=About%20that%20website!" target="_top" ><span>Email me!</span> <i className="fa fa-paper-plane" aria-hidden="true"/></a></p>
        <iframe width="auto" src="https://www.youtube.com/embed/VzQNdk2BYkQ?controls=0&amp;start=41" frameBorder="0" allowFullScreen title="awareness"></iframe>
      </div>
    );
  }
}

export default About;
