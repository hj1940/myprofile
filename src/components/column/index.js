import React, { Component } from 'react';
import './index.css'

class Column extends Component {
  render() {
    return (
      <div className="row">
        <div className="leftcolumn">
          <div className="card">
            <h2>TITLE HEADING</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <div className="fakeimg h200">Image</div>
            <p>Some text..</p>
          </div>
          <div className="card">
            <h2>TITLE HEADING</h2>
            <h5>Title description, Sep 2, 2017</h5>
            <div className="fakeimg h200">Image</div>
            <p>Some text..</p>
          </div>
        </div>
        <div className="rightcolumn">
          <div className="card">
            <h2>About Me</h2>
            <div className="fakeimg h100">Image</div>
            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
          </div>
          <div className="card">
            <h3>Popular Post</h3>
            <div className="fakeimg">Image</div><br/>
            <div className="fakeimg">Image</div><br/>
            <div className="fakeimg">Image</div>
          </div>
          <div className="card">
            <h3>Follow Me</h3>
            <p>Some text..</p>
          </div>
      </div>
    </div>
    );
  }
}

export default Column
