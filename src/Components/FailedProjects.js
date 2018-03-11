import React, { Component } from 'react';
import CCText from '../Images/FailedProjects/CCText.jpg'
import ENF from '../Images/FailedProjects/ENF.png'
import elephant from '../Images/FailedProjects/elephant.png'
import glasses1 from '../Images/FailedProjects/glasses1.png'
import glasses2 from '../Images/FailedProjects/glasses2.png'
import Macbook12 from '../Images/FailedProjects/Macbook12.png'
import middleamerica from '../Images/FailedProjects/middleamerica.png'


class FailedProjects extends Component {
  render() {

    return (
      <div className="FailedProjects section flex-container">
        <div className="CCBox" >
          <div className="row align-items-center featured" >
            <div className="col-md-5 offset-md-1 featured-body mt-sm-0" >
              <img className="staticSize" src={CCText} alt="CC" />
              <p className="CCInfo" >Volunteer portal where users are able to donate their browser’s resources to mine for a cryptocurrency called Monero on behalf of the non-profit organization Muslim Americans for Compassion. Also, volunteer can keep track of events and information coming from the organization, and they are able to log their volunteer hours. Currently a work in progress. Will go live once complete!</p>
              <div className="col-md-5" >
                <img src={Macbook12} className="thumb" alt="CC" />
              </div>
            </div>
          </div>
          <br/>
          <br/>
        </div>
        <div className="ENFBox" >
          <div className="row align-items-center featured" >
            <div className="col-md-5 offset-md-1 featured-body mt-sm-0" >
              <img className="staticSize" src={ENF} alt="ENF" />
              <p className="ENFInfo" >A game where a user is tasked with slaying as many zombie snowmen as possible, while avoiding obstacles. In collaboration with Matthew Gellert.</p>
              <img className="staticSize" src={elephant} alt="elephant" />
            </div>
          </div>
          <br/>
          <br/>
        </div>
        <div className="MABox" >
          <div className="row align-items-center featured" >
            <div className="col-md-5 offset-md-1 featured-body mt-sm-0" >
              <img src={middleamerica} alt="middleAmerica" className="thumb" />
              <p className="MAInfo" >Web portal for individuals and organizations who intend to help those affected by the 2017 hurricane devastation in Puerto Rico. In collaboration with Elbin Keeppanasseril.</p>
              <img src={glasses1} alt="glasses1" className="thumb"/>
              <img src={glasses2} alt="glasses2" className="thumb"/>
            </div>
          </div>
          <br/>
          <br/>
        </div>
      </div>
    );
  }
}

export default FailedProjects;
