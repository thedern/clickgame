import React, { Component } from 'react';

class Score extends Component {
  render() {
    const { score } = this.props;

    return (
      <div>
        <ul className="navbar-nav mr-auto mb-3">
          {score !== 0 ? (
            <li className="nav-item text-primary pt-3  scores-text">
              Current Score: {score}
            </li>
          ) : (
            <li className="nav-item text-danger pb-3 scores-text">
              You clicked twice: Score: {score}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Score;
