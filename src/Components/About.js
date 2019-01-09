import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="About section">
        <h1 className="about-intro"><strong>Sikander Chowhan</strong></h1>
        <p className="about-item">Sikander is a recent graduate of the Flatiron School's Web Development Intensive Program. After an apprenticeship learning about thoroughbred horse training, studying leather-working in San Francisco, and managing a hotel, he co-founded a startup building a mobile matrimonial service for Muslims; the two founders bootstrapped the firm from napkin-stage to production app in less than a year. Sikander decided to pursue an education in software engineering.<br/><br/>He has served on the Board of Directors for the Louisville Islamic Center as Treasurer, and directed two small nonprofits in Louisville, Kentucky: Muslim Americans for Compassion (MAC) and Doctors for Healthy Communities (DHC). Sikander holds a Bachelor of Science in Business Administration from Indiana University Southeast.<br/><br/>Sikander is currently developing a clothing line which will be launching in the coming weeks.</p>
        <p className="about-item"><a href="mailto:me@sikanderc.com?Subject=About%20that%20website!" target="_top" ><span>Email me!</span></a></p>
        <iframe width="auto" src="https://www.youtube.com/embed/VzQNdk2BYkQ?controls=0&amp;start=41" frameBorder="0" allowFullScreen title="awareness"></iframe>
      </div>
    );
  }
}

export default About;
