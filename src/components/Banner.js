import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <div>
        <div className="container banner mb-3">
          <div className="row">
            <div className="text-center lead text-light">
              <p className="font-weight-bold p-3">
                Click a Simpons character to score a point. Remember which you
                have already clicked because if you click the same one twice,
                you loose!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
