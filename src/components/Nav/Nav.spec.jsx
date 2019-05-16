import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import Nav from './Nav.smart';
import SideNav from './SideNav.dumb';
import NavButton from './NavButton.dumb';
import NavLink from './NavLink.dumb';

describe('Nav Smart Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<BrowserRouter><Nav /></BrowserRouter>);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('Renders a SideNav dumb component', () => {
    expect(wrapper.contains(SideNav)).toBe(true);
  });

  it('Renders a NavButton dumb component', () => {
    expect(wrapper.contains(NavButton)).toBe(true);
  });

  it('Renders a NavLink dumb component', () => {
    expect(wrapper.contains(NavLink)).toBe(true);
  });

  it('Updates selected nav link when new path is selected', () => {
    expect(wrapper.find(Link).prop('to').to.be.equal('/profile'));
  });
});
