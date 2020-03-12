import React, { Component } from 'react';
import './index.css'
import Header from '../header'
import Column from '../column'
import './index.scss';

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
          <Header/>
        </div>
        <div className="contents-main">
          <h2>Blog Name</h2>
        </div>
        <div className="contents-row">
          <Column/>
        </div>
      </div>
    );
  }
}

export default App;
