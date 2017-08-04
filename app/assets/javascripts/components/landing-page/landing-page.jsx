import React from 'react';
import PropTypes from 'prop-types';
import styles from './landing-page.scss';

const LandingPage = () => {
  return (
    <div className={styles.wrapper}>
      <a className={styles.link} href="/login">Log In</a>
      <a className={styles.link} href="/signup">Sign Up</a>
    </div>
  );
};

export default LandingPage;
