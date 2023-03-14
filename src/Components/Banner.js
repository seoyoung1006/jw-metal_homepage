import React, { Component } from "react";
import jwlogo from '../image/jwmetal-logo.png';

class Banner extends Component {
  render(){
    return(
      <header>
        <div class="inner">
          <div class="name">
            <span class="company">JW</span>
            <span class="type">metal</span>
          </div>
          <a href="/" class="logo">
            <img src={jwlogo} alt="jw-metal" />
          </a>
          
          <div class="nav">
              <ul class="menu">
                  <li>
                    <a href="/" id="about">About Us</a>
                  </li>
                  <li class="pro">
                    <a href="/" id="product">Product</a>
                  </li>
                  <div class="product_contents">
                      {/* <ul>
                        <li>Spring Wire</li>
                        <li>Weaving wire and wire for Flexible hose</li>
                        <li>General purpose wire</li>
                        <li>Roping wire</li>
                        <li>Rope</li>
                      </ul> */}
                  </div>
                  <li>
                    <a href="/" id="emailtous">Email to Us</a>
                  </li>
              </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Banner;