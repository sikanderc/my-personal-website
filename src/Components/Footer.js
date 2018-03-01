import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
      <div> </div>
        <div className="footer-1">
          <h3>Contact</h3>
          <p><a href="mailto:sikanderchowhan@gmail.com?Subject=About%20that%20website!" target="_top"><i className="fa fa-envelope i-hov" aria-hidden="true"/> sikanderchowhan@gmail.com</a></p>
          <p><a href="https://linkedin.com/in/sikanderchowhan" target="_blank" rel="noopener noreferrer" className="footer-link"><i className="fa fa-linkedin-square i-hov" aria-hidden="true"/> Linkedin</a></p>
          <p><a href="https://github.com/schowhan" target="_blank" rel="noopener noreferrer"><i className="fa fa-github i-hov" aria-hidden="true"/> Github</a></p>
          <p><a href="https://medium.com/@sikanderchowhan" target="_blank" rel="noopener noreferrer"><i className="fa fa-medium i-hov" aria-hidden="true"/> Blog</a></p><br/>
          <p>Made by Sikander Chowhan using React, JavaScript and custom CSS</p>
          <p>Check out the GitHub repository <strong><a href="https://github.com/schowhan/my-personal-website" target="_blank" rel="noopener noreferrer">here.</a></strong> © 2018</p>
        </div>
      </div>
    );
  }
}

export default Footer;
