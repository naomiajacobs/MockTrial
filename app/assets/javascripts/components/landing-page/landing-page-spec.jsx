import React from 'react'
import { shallow } from 'enzyme';
import LandingPage from './landing-page';

it('should do the thing', () => {
  const wrapper = shallow(<LandingPage />)
  const buttons = wrapper.find('a')
  expect(buttons.at(0)).toIncludeText('Log In');
  expect(buttons.at(1)).toIncludeText('Sign Up');
});
