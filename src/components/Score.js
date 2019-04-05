import React, { Component } from 'react';

class Score extends Component {
  render() {
    return (
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item text-danger pt-3  scores-text">
            Current Score:
          </li>
        </ul>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item text-primary pb-3 scores-text">
            Total Score:
          </li>
        </ul>
      </div>
    );
  }
}

export default Score;
