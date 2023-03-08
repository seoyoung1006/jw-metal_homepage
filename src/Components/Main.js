import React, { Component } from "react";

class Main extends Component {
  render(){
    return(
      <div class="main">
        <div class="about">
          <div class="pic">
            <img></img>
          </div>
          <div class="des">
            설명적기
          </div>
        </div>
        <div class="product">
          <div class="small">
            <div class="pname"></div>
            <div class="ppic">
              <img></img>
            </div>
          </div>
          <div class="big">
            <div class="pdes"></div>
            <div class="pchart"></div>
          </div>
        </div>
        <div class="email">
        </div>
      </div>
    );
  }
}

export default Main;