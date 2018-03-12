import React, { Component } from 'react';
import CCText from '../Images/Portfolio/CCText.jpg'
import ENF from '../Images/Portfolio/ENF.png'
import elephant from '../Images/Portfolio/elephant.png'
import glasses1 from '../Images/Portfolio/glasses1.png'
import glasses2 from '../Images/Portfolio/glasses2.png'
import Macbook12 from '../Images/Portfolio/Macbook12.png'
import middleamerica from '../Images/Portfolio/middleamerica.png'


class Portfolio extends Component {
  render() {

    return (
      <div className="Portfolio section flex-container">
        <div className="CCBox" >
          <div className="row align-items-center featured" >
            <div className="col-md-5 offset-md-1 featured-body mt-sm-0" >
              <img className="staticSize" src={CCText} alt="CC" />
              <br/>
              <p className="CCInfo">Leather accessory brand for Apple products such as the iPhone, iPad, and MacBook. I developed a process for hand-making these goods, providing Apple products with a clean, minimal accessory aesthetic. While most cases and covers take away from the clean, straight forward design principles Apple has come to be know for, Crescent Covers only served to accentuate the minimalistic appeal, simultaneously infusing a dose of individuality.</p>
              <p className="CCInfo2">I developed a number of different prototypes which are still being used by close friends and family. Below is a rendering of a die I had created for the production of the MacBook Crescent Cover.</p>
              <div className="col-md-5" >
                <img src={Macbook12} className="thumb" alt="CC" />
              </div>
            </div>
          </div>
          <br/>
        </div>
        <div className="ENFBox" >
          <div className="row align-items-center featured" >
            <div className="col-md-5 offset-md-1 featured-body mt-sm-0" >
              <img className="staticSize" src={ENF} alt="ENF" />
              <br/>
              <br/>
              <p className="ENFInfo" >ENF, short for "Elephants Never Forget", is a clothing brand which I was working on developing with 3 high school students. I was hoping to impart on them the knowledge of the initial steps in founding a business, along with the development of a brand with a social equity focus.</p>
              <p className="ENFInfo2">We spent the majority of our time creating a brand identity, finding a clothing manufacturer, creating prototypes, and then the subsequent back and forth with manufacturers of perfecting the final product. Additionally, we developed a plan to ensure a social equity purpose for the organization. We made a number of prototypes under the brand name "Elephants Never Forget."</p>
              <p className="ENFInfo3">The brand is currently a work in progress. The drawing of the elephant below is the logo we created for the brand.</p>
              <br/>
              <img className="staticSize" src={elephant} alt="elephant" />
            </div>
          </div>
          <br/>
        </div>
        <div className="MABox" >
          <div className="row align-items-center featured" >
            <div className="col-md-5 offset-md-1 featured-body mt-sm-0" >
              <img src={middleamerica} alt="middleAmerica" className="thumb"/>
              <p className="MAInfo">Middle America was one of the multiple sunglasses brands I developed alongside a few other business partners. We planned to create a competitor to Luxottica, the worlds number one manufacturer of eyewear.</p>
              <p className="MAInfo3">We created plans to 3D print the sunglasses, while marketing and selling the products through our proprietary software. Additionally, we took the time to develop a relationship with a non-profit doing eye rehabilitation work in third world countries, whom we agreed to support through company sales.</p>
              <p className="MAInfo2">Below are some mockups of prototypes we have planned to created.</p>
              <br/>
              <img src={glasses1} alt="glasses1" className="thumb"/>
              <img src={glasses2} alt="glasses2" className="thumb"/>
            </div>
          </div>
          <br/>
        </div>
      </div>
    );
  }
}

export default Portfolio;
