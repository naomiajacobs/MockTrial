import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header'
import Application from './components/application/application';

const externals = window.MockTrial

ReactDOM.render(
  <Header loggedIn={externals.loggedIn} />,
  document.getElementById('header')
);
