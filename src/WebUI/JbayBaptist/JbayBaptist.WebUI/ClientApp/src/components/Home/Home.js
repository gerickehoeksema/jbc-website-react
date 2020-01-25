import React, { Component } from 'react';

import './Home.css';

export class Home extends Component {
  static displayName = Home.name;
  
  render () {
    return (
      <div id="home-slider" className="flexslider fullbg" style={{backgroundImage:'url("http://www.wowthemes.net/demo/hypnos/img/intro.jpg")',height:'600px',padding:'0px',}}>
        <ul className="slides">
            <li className="home-slide">
                <div className="flex-caption transparent light-font center">
                    <p className="home-slide-content bounceInLeft animated" data-wow-delay="0.5s" data-wow-duration="4s">
                        Love people <span className="highlight">John 13:35</span>
                    </p>

                </div>
            </li>
            <li className="home-slide">
                <div className="flex-caption transparent light-font center">
                    <p className="home-slide-content bounceIn animated" data-wow-delay="2s" data-wow-duration="4s">
                        Make Disciples <span className="highlight">Matthew 28:18-20</span>
                    </p>
                </div>
            </li>
            <li className="home-slide">
                <div className="flex-caption transparent light-font center">
                    <p className="home-slide-content slideInLeft animated">
                        All for God's Glory <span className="highlight">1 Cor 10:31</span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
    );
  }
}
