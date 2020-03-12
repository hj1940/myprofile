import React, { Component } from 'react';
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="topnav" id="myTopnav">
        <a href="#home" class="active">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="javascript:void(0);" className="icon" onClick={this.myFunction.bind()}>
          <i class="fa fa-bars"></i>
        </a>
      </div>
    );
  }

  myFunction(){
    var x = document.getElementById("myTopnav");
       if (x.className === "topnav") {
         x.className += " responsive";
       } else {
         x.className = "topnav";
       }
    }
}

export default Header
