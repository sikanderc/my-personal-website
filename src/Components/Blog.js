import React, { Component } from 'react';
import blockchainIntro from "../Images/blockchainIntro9-11-17.png"
import tripleEntry from "../Images/tripleEntry10-2-17.png"
import bigDataIntro from "../Images/bigDataIntro10-23-17.png"
import illsOfBigData from "../Images/illsOfBigData11-13-17.png"
import newMoney from "../Images/newMoney3-4-18.png"

class Blog extends Component {
  render() {
    return (
      <div className="Blog section flex-container">
        <div className="item">
          <div className="row align-items-center featured" >
                <a href="https://medium.com/@sikanderchowhan/blockchain-a-brief-introduction-500f72a0104d" target="_blank">
                  <img src={blockchainIntro} className="thumb" alt="blockchainIntro" />
                </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
