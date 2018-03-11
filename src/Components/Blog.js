import React, { Component } from 'react';
import blockchainIntro from "../Images/blog/blockchainIntro9-11-17.png"
import tripleEntry from "../Images/blog/tripleEntry10-2-17.png"
import bigDataIntro from "../Images/blog/bigDataIntro10-23-17.png"
import illsOfBigData from "../Images/blog/illsOfBigData11-13-17.png"
import newMoney from "../Images/blog/newMoney3-4-18.png"

class Blog extends Component {
  render() {
    return (
      <div className="Blog section flex-container">
        <div >
          <div className="row align-items-center featured" >
            <a href="https://medium.com/@sikanderchowhan/blockchain-a-brief-introduction-500f72a0104d" target="_blank">
              <img src={blockchainIntro} className="thumb" alt="blockchainIntro" />
            </a>
          </div>
        </div>
        <br/>
        <br/>
        <div >
          <div className="row align-items-center featured" >
            <a href="https://medium.com/@sikanderchowhan/triple-entry-accounting-c-o-bitcoin-6c9de2402351" target="_blank">
              <img src={tripleEntry} className="thumb" alt="tripleEntry" />
            </a>
          </div>
        </div>
        <br/>
        <br/>
        <div >
          <div className="row align-items-center featured" >
            <a href="https://medium.com/@sikanderchowhan/big-data-an-introduction-9b9ce064a4fc" target="_blank">
              <img src={bigDataIntro} className="thumb" alt="bigDataIntro" />
            </a>
          </div>
        </div>
        <br/>
        <br/>
        <div >
          <div className="row align-items-center featured" >
            <a href="https://medium.com/@sikanderchowhan/the-ills-of-big-data-and-the-blockchain-remedies-6e8ef2159a2a" target="_blank">
              <img src={illsOfBigData} className="thumb" alt="illsOfBigData" />
            </a>
          </div>
        </div>
        <br/>
        <br/>
        <div >
          <div className="row align-items-center featured" >
            <a href="https://medium.com/@sikanderchowhan/new-money-new-problems-c4237e2d1ead" target="_blank">
              <img src={newMoney} className="thumb" alt="newMoney" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
