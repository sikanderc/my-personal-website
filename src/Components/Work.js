import React, { Component } from 'react';
import MAC from '../Images/work/MAC.png';
import DHC from '../Images/work/DHC.png';
import halalar_app from '../Images/work/halalar_app.jpg';
import halalar from '../Images/work/halalar.png';
import LIC from '../Images/work/LIC.jpg';


class Work extends Component {
  render() {
    return (
      <div className="Work section flex-container">
        <div className="macBox" >
          <div className="section" >
            <div >
              <img className="staticSize" src={MAC} />
              <br/>
              <p className="macInfo" >Volunteer portal where users are able to donate their browser’s resources to mine for a cryptocurrency called Monero on behalf of the non-profit organization Muslim Americans for Compassion. Also, volunteer can keep track of events and information coming from the organization, and they are able to log their volunteer hours. Currently a work in progress. Will go live once complete!</p>
            </div>
          </div>
        </div>
        <div className="dhcBox" >
          <div className="section" >
            <div >
              <img className="staticSize" src={DHC} />
              <br/>
              <p className="dhcInfo" >Volunteer portal where users are able to donate their browser’s resources to mine for a cryptocurrency called Monero on behalf of the non-profit organization Muslim Americans for Compassion. Also, volunteer can keep track of events and information coming from the organization, and they are able to log their volunteer hours. Currently a work in progress. Will go live once complete!</p>
            </div>
          </div>
        </div>
        <div className="LICBox" >
          <div className="section" >
            <div >
              <img className="staticSize" src={LIC} />
              <br/>
              <p className="LICInfo" >Volunteer portal where users are able to donate their browser’s resources to mine for a cryptocurrency called Monero on behalf of the non-profit organization Muslim Americans for Compassion. Also, volunteer can keep track of events and information coming from the organization, and they are able to log their volunteer hours. Currently a work in progress. Will go live once complete!</p>
            </div>
          </div>
        </div>
        <div className="halalarBox" >
          <div className="section" >
            <div >
              <img className="staticSize" src={halalar} />
              <br/>
              <p className="halalarInfo" >Volunteer portal where users are able to donate their browser’s resources to mine for a cryptocurrency called Monero on behalf of the non-profit organization Muslim Americans for Compassion. Also, volunteer can keep track of events and information coming from the organization, and they are able to log their volunteer hours. Currently a work in progress. Will go live once complete!</p>
              <img className="thumb" src={halalar_app} />
            </div>
          </div>
        </div>
        <div className="hotelBox" >
          <div className="row align-items-center featured" >
            <div className="col-md-5 offset-md-1 featured-body mt-sm-0" >
              <header >
                <h3 className="h2 hover-underline inverse" >Hotel Management</h3>
              </header>
              <p className="hotelInfo" >Over 5 years of experience in hotel management.</p>
            </div>
          </div>
          <br/>
          <br/>
        </div>
      </div>
    );
  }
}
export default Work;
