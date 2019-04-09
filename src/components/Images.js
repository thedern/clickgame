import React, { Component } from 'react';

class Images extends Component {
  // props are accessed via 'this.props..'
  // where this = current object

  // click event for delete
  onClickImage = () => {
    // props automatically passed from parent in class-based components, accessed via 'this.props'
    // this props is the delete function from parent that binds to current object and returns its 'id'
    this.props.handleClickImg();
  };

  render() {
    // destructure (optional and must be placed in the render
    // console.log('Image props is', this.props);
    const { name, image, isClicked, index } = this.props;
    return (
      <div className="card card-body mb-3">
        <ul className="list-group">
          <li className="list-group-item text-center" key={index}>
            <img
              alt="character"
              src={image}
              name={name}
              data-isClicked={isClicked}
              style={{ cursor: 'pointer' }}
              onClick={this.onClickImage}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default Images;
