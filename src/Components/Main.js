import React, { Component } from "react";
import intro from "../image/intro.png";
import spring from "../image/springwire.png";
import flexible from "../image/flexible.png";
import mesh from "../image/mesh.png";
import roping from "../image/ropingwire.jpg";
import rope from "../image/rope.png";

class Main extends Component {
  render(){
    return(
      <div class="main">
        <div class="about">
          <h4 class="mtitle">
            About Us
          </h4>
          <div class="pic">
            <img src={intro} alt="company pic"/>
          </div>
          <div class="des">
          "Welcome to JW Metal, 
your trusted source for high-quality stainless steel wire and roping wire products. Established in 2022, our company is committed to providing top-notch wire products to meet the diverse needs of our customers. We take pride in offering a wide range of stainless steel wire, like as spring wire, weaving wire, general purpose wire, roping wire and rope products, from industrial to commercial and beyond. 
With a focus on innovation, quality, and customer satisfaction, we are always seeking new ways to enhance our products and services. Thank you for choosing JW Metal as your trusted partner in stainless steel wire."
          </div>
        </div>
        <div class="product">
          <h4 class="mtitle">
            Product - Wires and Ropes
          </h4>
          <div class="small1">
            <h5 class="pname">
              Spring Wire
            </h5>
            <div class="ppic">
              <img src={spring} alt="p1" />
            </div>
          </div>
          <div class="big1">
            <div class="pdes">
            Our spring wire exhibits excellent coiling-ability at high speeds resulting in less stress on coiling equipment, preserving equipment life, and maximizing profits.<br></br>
Available in grades 302, 304, 304H, 316, 631 etc.
Surface conditions : S-CO, Bright and Nickel Coated
Tensile strengths can meet every specs of the world.
Size range from 0.12mm ~ 5mm.
Packings are coil, carrier and spools.
            </div>
          </div>
          <div class="small2">
            <h5 class="pname">
              Weaving wire and wire for Flexible hose
            </h5>
            <div class="ppic">
              <img src={flexible} alt="p2" />
            </div>
          </div>
          <div class="big2">
            <div class="pdes">
            Our weaving and flexible wire are used at many kind of industrial field with great performance.
Tensile strengths can meet every specs of the world.
Size range from 0.12mm ~ 0.6mm.
Available in grades 304, 316, 316L, 310 and etc.
Packings are every kinds of spool.(DIN, SH, PT and etc)
            </div>
          </div>
          <div class="small3">
            <h5 class="pname">
            General purpose wire (Mesh, Conveyer Belt and Bolt)
            </h5>
            <div class="ppic">
              <img src={mesh} alt="p3" />
            </div>
          </div>
          <div class="big3">
            <div class="pdes">
            Our General purpose wire are specifically customized to meet the demands of the many industry. With a uniformly shiny surface are ideal for use in a broad variety of applications.
Tensile strengths can meet every specs of the world.
Size range from 0.8mm ~ 5mm.
Available in grades 302, 304, 316 and etc.
Packings are coil, carrier and spools.
            </div>
          </div>
          <div class="small4">
            <h5 class="pname">
            Roping wire 
            </h5>
            <div class="ppic">
              <img src={roping} alt="p4" />
            </div>
          </div>
          <div class="big4">
            <div class="pdes">
            Our roping wire is perfect quality for making rope with tension controlling at spooling process.
Tensile strengths can meet every specs of the world.
Size range from 0.10mm ~ 3mm.
Available in grades 302, 304, 316 and etc.
Packings are many kinds of spools.
            </div>
          </div>
          <div class="small5">
            <h5 class="pname">
            Rope products 
            </h5>
            <div class="ppic">
              <img src={rope} alt="p5" />
            </div>
          </div>
          <div class="big5">
            <div class="pdes">
            Our rope will play a vital rope as a strong and very lasting in severe environment through improvement in productivity and quality. 
Especially we are very good in coated rope for lace used in shoes. These materials are strong, durable, and resistant to corrosion. Our Rope wire 
lace used in shoes needs to be durable and able to withstand frequent wear and tear. Stainless steel and brass wire are great options for this. Its unique texture and pattern can add a stylish touch to any pair of shoes.
            </div>
          </div>
        </div>
        <div class="email">
          <h4 class="mtitle">
            Email to Us
          </h4>
          <div class="container">
            <h2>sales@k-jw.com</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;