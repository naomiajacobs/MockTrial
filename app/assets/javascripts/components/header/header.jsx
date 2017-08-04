import React from 'react'
import PropTypes from 'prop-types'
import styles from './header.scss'

function Header({ loggedIn }) {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        Mock Trial Tournament Runner
      </div>
      <div className={styles.headerRight}>
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
