import React, { Component } from 'react';
import './index.css'
import Header from '../header'
import Column from '../column'

import Typewriter from 'typewriter-effect';

class App extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.scrollFunction);
  }

  scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header").style.fontSize = "30px";
    } else {
      document.getElementById("header").style.fontSize = "90px";
    }
  }
  render() {
    return (
      <div className={"App"}>
        <div className="App-header" id="header">

        </div>
        <div id="typing" className="contents-main">
        <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('Software engineer Kim Hui Jin is...')
          .callFunction(() => {
            console.log('String typed out!');
          })
          .pauseFor(2500)
          .deleteAll()
          .callFunction(() => {
            console.log('All strings were deleted');
          })
          .start();
        }}
        />
        </div>
        <div>
          <Column/>
        </div>
      </div>
    );
  }
}

export default App;
