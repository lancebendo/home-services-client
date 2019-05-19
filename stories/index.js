import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Nav Component
import Nav from '../src/components/Nav';
import NavButton from '../src/components/Nav/NavButton.dumb';
import NavLink from '../src/components/Nav/NavLink.dumb';

// Shared Components
import Modal from '../src/components/Shared/Modal';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

const mockPaths = [
  { name: 'Dashboard', path: '/', icon: 'home' },
  { name: 'Profile', path: '/profile', icon: 'person' },
  { name: 'History', path: '/history', icon: 'history' },  
];

storiesOf('Nav', module)
  .add('Nav Smart Component', () => <BrowserRouter><Nav availablePaths={mockPaths} isTest/></BrowserRouter>)
  .add('NavButton Dumb Component', () => <NavButton label="NavButton" icon="home" onClick={action('NavButton clicked')}/>)
  .add('NavLink Dumb Component', () => <BrowserRouter><NavLink label="Home" icon="home" path="/" onClick={action('NavLink clicked')} /></BrowserRouter>);

// storiesOf('Profile', module).add('Nav Smart Component', () => <BrowserRouter><Nav availablePaths={mockPaths} isTest/></BrowserRouter>);

storiesOf('Shared Components', module).add('Nav Smart Component', () => <Modal />);
