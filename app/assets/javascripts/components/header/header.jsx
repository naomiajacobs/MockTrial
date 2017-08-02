import React from 'react'
import PropTypes from 'prop-types'

function Header({ loggedIn }) {
  return (
    <div className="header">
      <div className="headerLeft">
        Mock Trial Tournament Runner
      </div>
      <div className="headerRight">
        { loggedIn ?
          <a href="/logout">Log Out</a> :
          <a href="/login">Log In</a>
        }
      </div>
    </div>
  );
}

Header.propTypes = {
  loggedIn: PropTypes.bool,
};

Header.defaultProps = {
  loggedIn: false,
};

export default Header;
