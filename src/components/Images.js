import React, { Component } from 'react';

class Images extends Component {
  // props are accessed via 'this.props..'
  // where this = current object

  render() {
    // destructure (optional and must be placed in the render
    // console.log('Image props is', this.props);
    const { name, image, isClicked, handleClick } = this.props;
    return (
      <div
        className="card card-body mb-3"
        onClick={() => handleClick(this.props)}
      >
        <ul className="list-group">
          <li className="list-group-item text-center" key={name}>
            <img alt="character" src={image} data-isClicked={isClicked} />
          </li>
        </ul>
      </div>
    );
  }
}

export default Images;
