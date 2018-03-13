import React, { Component } from 'react';
import flatironschool from '../Images/edu/flatironschool.png'
import IUS from '../Images/edu/IUS.png'
import ALA from '../Images/edu/ALA.jpg'

class Education extends Component {
  render() {
    return (
      <div className="Education section flex-container">
        <div className="flatironBox" >
          <div className="section" >
            <a href="https://flatironschool.com/" target="_blank" rel="noopener noreferrer">
              <img className="staticSize" src={flatironschool} alt="flatironschool"/>
            </a>
            <p className="flatironInfo" >Completed the Full-Stack Web Development Intensive in December of 2017. Developed skills for Ruby, Ruby on Rails, ActiveRecord, Sinatra, JavaScript, React.js, Redux, Postgres, SQLite3, APIs, HTML, CSS, and jQuery.</p>
          </div>
        </div>
        <div className="iusBox" >
          <div className="section" >
            <a href="https://ius.edu" target="_blank" rel="noopener noreferrer">
              <img className="staticSize" src={IUS} alt="IUS"/>
            </a>
            <p className="iusInfo" >Completed a Bachelor of Science Degree in Business Administration and Management in the summer of 2017.</p>
          </div>
        </div>
        <div className="ALABox" >
          <div className="section" >
            <a href="http://amblardleatheratelier.com" target="_blank" rel="noopener noreferrer">
              <img className="staticSize" src={ALA} alt="ALA"/>
            </a>
            <p className="ALAInfo" >Completed Expert Leatherwork Training Course in the summer of 2013.</p>
          </div>
        </div>
        <div className="flintBox" >
          <div className="section" >
            <header >
              <h3 className="h2 hover-underline inverse" >Flint Racing Stables</h3>
            </header>
            <p className="flintInfo" >Apprenticeship on thoroughbred horse training under the tutelage of Bernard S. Flint. Apprenticeship included working as a farm hand on a thoroughbred breeding farm where I was given the opportunity to help deliver a baby horse, a most unforgettable experience.</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Education;
