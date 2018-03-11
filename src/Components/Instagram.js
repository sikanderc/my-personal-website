import React, { Component } from 'react';
import Instafeed from 'react-instafeed';
import ScrollArea from 'react-scrollbar'


class Instagram extends Component {
  render() {
    const instafeedTarget = 'instafeed';

    return (
      <div className="Instagram">
        <div className="Instagram">
          <div id={instafeedTarget}>
            <ScrollArea
              speed={0.8}
              contentClassName="content"
              horizontal={true}>
              <Instafeed limit='20' ref='instafeed' resolution='low_resolution' sortBy='most-liked' target={instafeedTarget}
              template={
              `<a href='{{link}}' target='_blank' class='instafeed__item'>
              <img class='instafeed__item__background' src='{{image}}' />
              </a>`}
              userId='3712663025' clientId='5293034958c945429339b7abba23a2c9' accessToken='3712663025.5293034.070cabc92909450bbbbd004542a9d2af' />
            </ScrollArea>

          </div>
        </div>
      </div>
    );
  }
}

export default Instagram;
