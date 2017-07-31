import React from 'react'
import { shallow } from 'enzyme';
import Header from './header';

it('should do the thing', () => {
  const wrapper = shallow(<Header />)
  expect(wrapper).toIncludeText('Mock Trial Tournament Runner')
});
