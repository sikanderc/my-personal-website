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
            <div >
              <img className="staticSize" src={flatironschool} />
              <br/>
              <p className="flatironInfo" >Volunteer portal where users are able to donate their browser’s resources to mine for a cryptocurrency called Monero on behalf of the non-profit organization Muslim Americans for Compassion. Also, volunteer can keep track of events and information coming from the organization, and they are able to log their volunteer hours. Currently a work in progress. Will go live once complete!</p>
            </div>
          </div>
        </div>
        <div className="iusBox" >
          <div className="section" >
            <div >
              <img className="staticSize" src={IUS} />
              <br/>
              <p className="iusInfo" >Volunteer portal where users are able to donate their browser’s resources to mine for a cryptocurrency called Monero on behalf of the non-profit organization Muslim Americans for Compassion. Also, volunteer can keep track of events and information coming from the organization, and they are able to log their volunteer hours. Currently a work in progress. Will go live once complete!</p>
            </div>
          </div>
        </div>
        <div className="ALABox" >
          <div className="section" >
            <div >
              <img className="staticSize" src={ALA} />
              <br/>
              <p className="ALAInfo" >Volunteer portal where users are able to donate their browser’s resources to mine for a cryptocurrency called Monero on behalf of the non-profit organization Muslim Americans for Compassion. Also, volunteer can keep track of events and information coming from the organization, and they are able to log their volunteer hours. Currently a work in progress. Will go live once complete!</p>
            </div>
          </div>
        </div>
        <div className="flintBox" >
          <div className="section" >
            <div >
              <header >
                <h3 className="h2 hover-underline inverse" >Flint Racing Stables</h3>
              </header>
              <br/>
              <p className="flintInfo" >Volunteer portal where users are able to donate their browser’s resources to mine for a cryptocurrency called Monero on behalf of the non-profit organization Muslim Americans for Compassion. Also, volunteer can keep track of events and information coming from the organization, and they are able to log their volunteer hours. Currently a work in progress. Will go live once complete!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Education;
