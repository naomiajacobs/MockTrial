import React from 'react'
import { shallow } from 'enzyme';
import Header from './header';

describe('<Header />', () => {
  let wrapper;
  const render = (props) => shallow(<Header {...props} />);

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders the header', () => {
    wrapper = render();
    expect(wrapper).toIncludeText('Mock Trial Tournament Runner')
  });

  describe('loggedIn', () => {
    it('renders a login link when user is logged out', () => {
      wrapper = render();
      expect(wrapper).toIncludeText('Log In');
    });

    it('renders normal other links when user is logged in', () => {
      wrapper = render({ loggedIn: true });
      expect(wrapper).toIncludeText('Log Out');
    });
  });
});
