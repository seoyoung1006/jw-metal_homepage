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
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Product</a>
              </li>
              <li>
                <a href="/">Email to Us</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Banner;