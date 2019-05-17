import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import Nav from './Nav.smart';
import SideNav from './SideNav.dumb';
import NavButton from './NavButton.dumb';
import NavLink from './NavLink.dumb';

describe('Nav Smart Component', () => {
  let wrapper;
  let navComponent;

  const mockPaths = [
    { name: 'Dashboard', path: '/', icon: 'home' },
    { name: 'Profile', path: '/profile', icon: 'person' },
    { name: 'History', path: '/history', icon: 'history' },
  ];

  beforeEach(() => {
    wrapper = mount(<MemoryRouter><Nav availablePaths={mockPaths} isTest /></MemoryRouter>);
    navComponent = wrapper.find('Nav');
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('Renders a SideNav dumb component', () => {
    expect(navComponent.find(SideNav)).toBeDefined();
  });

  it('Renders a NavButton dumb component', () => {
    expect(navComponent.find(NavButton)).toBeDefined();
  });

  it('Renders a NavLink dumb component', () => {
    expect(navComponent.find(NavLink)).toBeDefined();
  });


  it('Updates selected nav link state when new path is selected', () => {
    navComponent.instance().onNavChange(null, { path: '/profile' });
    expect(navComponent.state().currentPath).toBe('/profile');
  });
});
