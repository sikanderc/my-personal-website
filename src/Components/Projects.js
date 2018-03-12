import React, { Component } from 'react';
import petinder from '../Images/projects/petinder.gif'
import puertosupport from '../Images/projects/puertosupport.gif'
import ds3 from '../Images/projects/ds3.gif'
import MACportal from '../Images/projects/MACportal.gif'

class Projects extends Component {
  render() {

    return (
      <div className="Projects section flex-container">
        <div className="macBox" >
          <div className="row align-items-center featured" >
            <div className="col-md-5 offset-md-1 featured-body mt-sm-0" >
              <header >
                <h3 className="h2 hover-underline inverse" >MAC Volunteer Portal and Monero Miner</h3>
              </header>
              <div className="col-md-5" >
               <img src={MACportal} className="thumb" alt="MAC" />
              </div>
              <p className="macInfo" >Volunteer portal where users are able to donate their browser’s resources to mine for a cryptocurrency called Monero on behalf of the non-profit organization Muslim Americans for Compassion. Also, volunteer can keep track of events and information coming from the organization, and they are able to log their volunteer hours. Currently a work in progress. Will go live once complete!</p>
              <p><a href="https://github.com/sikanderc/mac-volunteer-portal" target="_blank" rel="noopener noreferrer">GitHub Repository - Frontend</a></p>
              <p><a href="https://github.com/sikanderc/mac-volunteer-portal-api" target="_blank" rel="noopener noreferrer">GitHub Repository - Backend</a></p>
              <div className="technologies" >#ruby, #javascript, #react, #redux</div>
            </div>
          </div>
          <br/>
          <br/>
        </div>
        <div className="ds3Box" >
          <div className="row align-items-center featured" >
            <div className="col-md-5 offset-md-1 featured-body mt-sm-0" >
              <header >
                <h3 className="h2 hover-underline inverse" >Downhill Skiing Snowman Slayer</h3>
              </header>
              <div className="col-md-5" >
               <img src={ds3} className="thumb" alt="DS3" />
              </div>
              <p className="ds3Info" >A game where a user is tasked with slaying as many zombie snowmen as possible, while avoiding obstacles. In collaboration with Matthew Gellert.</p>
              <p><a href="https://github.com/mattgellert/downhill-skiing-snowman-slayer-front-end" target="_blank" rel="noopener noreferrer">GitHub Repository - Frontend</a></p>
              <p><a href="http://mattgellert/downhill-skiing-snowman-slayer-back-end" target="_blank" rel="noopener noreferrer">GitHub Repository - Backend</a></p>
              <div className="technologies" >#ruby, #javascript</div>
            </div>
          </div>
          <br/>
          <br/>
        </div>
        <div className="puertoBox" >
          <div className="row align-items-center featured" >
            <div className="col-md-5 offset-md-1 featured-body mt-sm-0" >
              <header >
                <h3 className="h2 hover-underline inverse" >Puerto Rico Support Portal</h3>
              </header>
              <div className="col-md-5" >
               <img src={puertosupport} className="thumb" alt="PuertoSupport" />
              </div>
              <p className="puertoInfo" >Web portal for individuals and organizations who intend to help those affected by the 2017 hurricane devastation in Puerto Rico. In collaboration with Elbin Keeppanasseril.</p>
              <p><a href="https://github.com/elbincodes/puerto_rico_support" target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
              <div className="technologies" >#ruby, #rubyOnRails</div>
            </div>
          </div>
          <br/>
          <br/>
        </div>
        <div className="peTinderBox" >
          <div className="row align-items-center featured" >
            <div className="col-md-5 offset-md-1 featured-body mt-sm-0" >
              <header >
                <h3 className="h2 hover-underline inverse" >PeTinder</h3>
              </header>
              <div className="col-md-5" >
               <img src={petinder} className="thumb" alt="PeTinder" />
              </div>
              <p className="peTinderInfo" >CLI app allowing users to input basic information and specify certain conditions in order to be paired with a pet at a shelter close to the user’s zip code. In collaboration with Lisa Hufnagel.</p>
              <p><a href="https://github.com/sikanderc/petinder-cli-ruby" target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
              <div className="technologies" >#ruby</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
