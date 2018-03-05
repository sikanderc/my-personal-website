import React, { Component } from 'react';
import Instafeed from 'react-instafeed';

class Instagram extends Component {
  render() {
    const instafeedTarget = 'instafeed';

    return (
      <div className="Instagram section flex-container">
        <div id={instafeedTarget}>
          <Instafeed limit='5' ref='instafeed' resolution='low_resolution' sortBy='most-liked' target={instafeedTarget} template={`<a href='{{link}}' target='_blank' class='instafeed__item'>
  <img class='instafeed__item__background' src='{{image}}' />
    <div class='instafeed__item__overlay'>
      <div class='instafeed__item__overlay--inner'>
        <p class='instafeed__item__caption'>{{model.short_caption}}</p>
        <p class='instafeed__item__location'>{{location}}</p>
      </div>
    </div>
</a>`} userId='3712663025' clientId='5293034958c945429339b7abba23a2c9' accessToken='3712663025.5293034.070cabc92909450bbbbd004542a9d2af' />
        </div>
      </div>
    );
  }
}

export default Instagram;
