import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
      <div> </div>
        <div className="footer-1">
          <p>me@sikanderc.com</p>
          <a href="https://linkedin.com/in/sikanderchowhan" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square i-hov" aria-hidden="true"/></a>    <a href="https://medium.com/@sikanderchowhan" target="_blank" rel="noopener noreferrer"><i className="fa fa-medium i-hov" aria-hidden="true"/></a>    <a href="https://github.com/sikanderchowhan" target="_blank" rel="noopener noreferrer"><i className="fa fa-github i-hov" aria-hidden="true"/></a>    <a href="mailto:sikanderchowhan@gmail.com?Subject=Hello%20there!" target="_top"><i className="fa fa-envelope i-hov" aria-hidden="true"/></a><br/>
          <p>Built with React, JavaScript and custom CSS</p>
          <p>Check out the GitHub repository <strong><a href="https://github.com/schowhan/my-personal-website" target="_blank" rel="noopener noreferrer">here.</a></strong></p>
          <p>© 2018</p>
        </div>
      </div>
    );
  }
}

export default Footer;
