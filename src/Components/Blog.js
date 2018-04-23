import React, { Component } from 'react';
import blockchainIntro from "../Images/blog/blockchainIntro9-11-17.png"
import tripleEntry from "../Images/blog/tripleEntry10-2-17.png"
import bigDataIntro from "../Images/blog/bigDataIntro10-23-17.png"
import illsOfBigData from "../Images/blog/illsOfBigData11-13-17.png"
import newMoney from "../Images/blog/newMoney3-4-18.png"
import consensus from "../Images/blog/consensus3-11-18.png"
import DAO from "../Images/blog/DAO3-20-18.png"
import onWeb from "../Images/blog/onWeb3-25-18.png"
import whatsMoney from "../Images/blog/whatsMoney4-2-18.png"
import whatsSharding from "../Images/blog/whatsSharding4-23-18.png"


class Blog extends Component {
  render() {
    return (
      <div className="Blog section flex-container">
        <div >
          <div className="row align-items-center featured" >
            <a href="https://medium.com/@sikanderchowhan/blockchain-a-brief-introduction-500f72a0104d" target="_blank" rel="noopener noreferrer">
              <img src={blockchainIntro} className="thumb" alt="blockchainIntro" />
            </a>
          </div>
        </div>
        <br/>
        <br/>
        <div >
          <div className="row align-items-center featured" >
            <a href="https://medium.com/@sikanderchowhan/triple-entry-accounting-c-o-bitcoin-6c9de2402351" target="_blank" rel="noopener noreferrer">
              <img src={tripleEntry} className="thumb" alt="tripleEntry" />
            </a>
          </div>
        </div>
        <br/>
        <br/>
        <div >
          <div className="row align-items-center featured" >
            <a href="https://medium.com/@sikanderchowhan/big-data-an-introduction-9b9ce064a4fc" target="_blank" rel="noopener noreferrer">
              <img src={bigDataIntro} className="thumb" alt="bigDataIntro" />
            </a>
          </div>
        </div>
        <br/>
        <br/>
        <div >
          <div className="row align-items-center featured" >
            <a href="https://medium.com/@sikanderchowhan/the-ills-of-big-data-and-the-blockchain-remedies-6e8ef2159a2a" target="_blank" rel="noopener noreferrer">
              <img src={illsOfBigData} className="thumb" alt="illsOfBigData" />
            </a>
          </div>
        </div>
        <br/>
        <br/>
        <div >
          <div className="row align-items-center featured" >
            <a href="https://medium.com/@sikanderchowhan/new-money-new-problems-c4237e2d1ead" target="_blank" rel="noopener noreferrer">
              <img src={newMoney} className="thumb" alt="newMoney" />
            </a>
          </div>
        </div>
        <br/>
        <br/>
        <div >
          <div className="row align-items-center featured" >
            <a href="https://medium.com/@sikanderchowhan/one-consensus-algorithm-to-rule-them-all-fe5496f2802" target="_blank" rel="noopener noreferrer">
              <img src={consensus} className="thumb" alt="consensus" />
            </a>
          </div>
        </div>
        <br/>
        <br/>
        <div >
          <div className="row align-items-center featured" >
            <a href="https://medium.com/tl-dr-blockchain-blog/dao-the-corporation-of-tomorrow-b424a5784d1" target="_blank" rel="noopener noreferrer">
              <img src={DAO} className="thumb" alt="dao" />
            </a>
          </div>
        </div>
        <br/>
        <br/>
        <div >
          <div className="row align-items-center featured" >
            <a href="https://medium.com/tl-dr-blockchain-blog/on-web-3-0-a-collection-of-poetry-334dec1291b1" target="_blank" rel="noopener noreferrer">
              <img src={onWeb} className="thumb" alt="onWeb" />
            </a>
          </div>
        </div>
        <br/>
        <br/>
        <div >
          <div className="row align-items-center featured" >
            <a href="https://medium.com/tl-dr-blockchain-blog/what-is-money-82be32efc72b" target="_blank" rel="noopener noreferrer">
              <img src={whatsMoney} className="thumb" alt="whatsMoney" />
            </a>
          </div>
        </div>
        <br/>
        <br/>
        <div >
          <div className="row align-items-center featured" >
            <a href="https://medium.com/tl-dr-blockchain-blog/whats-sharding-beb7499db288" target="_blank" rel="noopener noreferrer">
              <img src={whatsSharding} className="thumb" alt="whatsSharding" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
