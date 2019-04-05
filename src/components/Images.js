import React, { Component } from 'react';

class Images extends Component {
  // props are accessed via 'this.props..'
  // where this = current object

  render() {
    // destructure (optional and must be placed in the render
    // console.log('Image props is', this.props);
    const { name, image } = this.props;
    return (
      <div className="card card-body mb-3">
        <ul className="list-group">
          <li className="list-group-item text-center" key={name}>
            <img alt="character" src={image} />
          </li>
        </ul>
      </div>
    );
  }
}

export default Images;
