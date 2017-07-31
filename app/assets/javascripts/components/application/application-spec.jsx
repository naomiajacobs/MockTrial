import React from 'react'
import { shallow } from 'enzyme';
import Application from './application';

it('should do the thing', () => {
  const wrapper = shallow(<Application />)
  expect(wrapper).toIncludeText('Hello, World!')
});
