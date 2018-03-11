import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="About section">
        <h1 className="about-intro"><strong>Sikander Chowhan</strong>:</h1>
        <h2 className="about-intro2">Passionate about decentralization.</h2>
        <p className="about-item">Sikander is a recent graduate of the Flatiron School's Web Development Intensive program. After an apprenticeship learning about thoroughbred horse training, studying leather-working in San Francisco, and managing a hotel, he co-founded a startup building a mobile matrimonial service for Muslims; the two founders bootstrapped the firm from napkin-stage to production app in less than a year. Sikander decided to pursue a career in software engineering.<br/><br/>He has served on the Board of Directors for the Louisville Islamic Center as Treasurer, and he helped to brand and direct two small non-profits in Louisville, Kentucky: Muslim Americans for Compassion(MAC) and Doctors for Healthy Communities(DHC). Sikander holds a Bachelor's of Science in business administration from Indiana University Southeast.</p>
        <p className="about-item">#hodl<br/><br/><a href="mailto:sikanderchowhan@gmail.com?Subject=About%20that%20website!" target="_top" ><span>Email me!</span> <i className="fa fa-paper-plane" aria-hidden="true"/></a></p>
        <iframe width="auto" src="https://www.youtube.com/embed/VzQNdk2BYkQ?controls=0&amp;start=41" frameBorder="0" allowFullScreen title="awareness"></iframe>
      </div>
    );
  }
}

export default About;
