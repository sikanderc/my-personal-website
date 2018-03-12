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
              <a href="http://macus.org" target="_blank" rel="noopener noreferrer">
                <img className="staticSize" src={MAC} alt="MAC"/>
              </a>
              <br/>
              <p className="macInfo">During my time serving as the Chief Strategic Officer for Muslim Americans for Compassion, I worked closely with Dr. Muhammad Babar (President) in developing, communicating, executing, and sustaining MAC’s strategic initiatives.</p>
              <p className="macInfo2">This included paying close attention to the vision and mission of the organization as the organization grew, making changes where needed.</p>
              <p className="macInfo3">Also, I was tasked with developing new projects for the organization to take on, maintaining the social media accounts, and overseeing the continued development of the website. Additionally, I was tasked with keeping track of the accounts, networking with leaders across the Compassionate Louisville community, and periodically communicating with the press.</p>
              <p className="macInfo4">One of my final projects during my tenure at the organization was developed through a partnership with "Sowing Seeds with Faith," the largest out of school enrichment program in the Louisville, Kentucky Area. They operate a Summer Program out of the St. Stephens Family Life Center, in one of the lower-income neighborhoods in the city. With our partnership, we came once a week during their 7-week program to teach basic computer programming skills to varying groups of children (over 120 of them). By taking part in this program, we were hoping to impart on these children the wisdom that they are able to take learning into their own hands, providing them with the basic tools to get their minds interested in coding. Our motivation was that with a basic foundation in computer programming, these children would be able to take advancement into their own hands, paving the road for stronger, more knowledgeable, communities.</p>
            </div>
          </div>
        </div>
        <div className="dhcBox" >
          <div className="section" >
            <div >
              <a href="http://dhcus.org" target="_blank" rel="noopener noreferrer">
                <img className="staticSize" src={DHC} alt="DHC"/>
              </a>
              <br/>
              <p className="dhcInfo" >I also served as the Chief Strategic officer for Doctors for Healthy Communities, the sister organization of Muslim Americans for Compassion. I worked to develop the initial framework for this organization. I worked closely with Dr. Muhammad Babar (President) in developing and communicating DHC’s strategic initiatives.</p>
              <p className="macInfo2">This included paying close attention to drafting the proper vision and mission of the organization.</p>
              <p className="macInfo3">Also, I oversaw the development of the website. Because my tenure with this organization came towards the end of my time in Louisville, I was only able to see the organization through a few projects (like our free community health clinic).</p>
            </div>
          </div>
        </div>
        <div className="LICBox" >
          <div className="section" >
            <div >
              <a href="http://louisvilleislamiccenter.org" target="_blank" rel="noopener noreferrer">
                <img className="staticSize" src={LIC} alt="LIC"/>
              </a>
              <br/>
              <p className="LICInfo">I served a two year term as a Board Member of this religious institution. I was elected by community members and became the Treasurer during the first year of my term, spending countless hours working on improving the Center and developing systems for seamless day-to-day operation.</p>
              <p className="LICInfo2">One huge issue was that no one had taken the time to develop the organizaitonal systems so every time new people assumed board positions, they were forced to start from scratch, severely impeding progress at the Center.</p>
              <p className="LICInfo3">I spearheaded the adoption of online systems to facilitate the seamless transition of members, allowing for progress to be built upon rather than having to be built up over and over again. During my tenure as Board Member, we experienced a terrible vandalization of our property, but we were also lucky enough to experience the most beautiful interfaith gathering in response to it. Hundreds of people of various backgrounds and faiths came together to help restore the Center to it's previous distinction. This brief video details the event. I am quoted towards the end of the video.</p>
              <iframe width="auto" src="https://www.youtube.com/embed/CPdMOaD8a9s" frameBorder="0" allowFullScreen title="centerCleanup"></iframe>
            </div>
          </div>
        </div>
        <div className="halalarBox" >
          <div className="section" >
            <div >
              <img className="staticSize" src={halalar} alt="halalar"/>
              <br/>
              <p className="halalarInfo" >With another Co-founder, I decided to create a Muslim Matrimony mobile application, called Halalar. It was the first of it's kind.</p>
              <p className="halalarInfo2">We bootstrapped the firm from napkin-stage to production app in less than a year. It was a wonderful growing experience.</p>
              <img className="thumb" src={halalar_app} alt="halalar_app"/>
            </div>
          </div>
        </div>
        <div className="hotelBox" >
          <div className="row align-items-center featured" >
            <div className="col-md-5 offset-md-1 featured-body mt-sm-0" >
              <header >
                <h3 className="h2 hover-underline inverse" >Hotel Management</h3>
              </header>
              <p className="hotelInfo" >Over 5 years of experience in hotel operations and management. Studied business operation and management first hand under the guidance of hotelier and restauranteur, Arif Butt, owner of various hotels and restaurants in Florida and Kentucky.</p>
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
