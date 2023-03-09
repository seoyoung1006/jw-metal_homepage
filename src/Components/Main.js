import React, { Component } from "react";
import present from "../image/sign.png";

class Main extends Component {
  render(){
    return(
      <div class="main">
        <div class="about">
          <h4 class="mtitle">
            About Us
          </h4>
          <div class="pic">
            <img src={present} alt="company pic"/>
          </div>
          <div class="des">
            설명적기
          </div>
        </div>
        <div class="product">
          <h4 class="mtitle">
            Product
          </h4>
          <div class="small">
            <h5 class="pname">
              첫번째 상품
            </h5>
            <div class="ppic">
              <img src={present} alt="p1" />
            </div>
          </div>
          <div class="big">
            <div class="pdes">
              this help make desk~~
            </div>
            <div class="pchart">
              chart니까 img?
            </div>
          </div>
        </div>
        <div class="email">
          <h4 class="mtitle">
            Email to Us
          </h4>
        </div>
      </div>
    );
  }
}

export default Main;