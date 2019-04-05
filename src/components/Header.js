import React from 'react';
import Score from './Score';
//import 'bootstrap/dist/css/bootstrap.min.css';

const Header = props => {
  // destructure (else enter: props.branding into <h3> )
  const { branding } = props;

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-warning mb-3 py-0">
        <div className="container">
          <a href="/" className="branding-link">
            {branding}
          </a>
          <div>
            {/* insert score component here, will need to pass props I believe */}
            <Score />
          </div>
        </div>
      </nav>
    </div>
  );
};

// create a default branding in-case no props are passed in
// props from App.js will supercede default
Header.defaultProps = {
  branding: 'click app is cool'
};

export default Header;
