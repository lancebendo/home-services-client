import React from 'react';

import { BrowserRouter } from 'react-router-dom';
// import Nav from '../src/components/Nav';
import NavButton from '../src/components/Nav/NavButton.dumb';
// import NavLink from './NavLink.dumb';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

// const mockPaths = [
//   { name: 'Dashboard', path: '/', icon: 'home' },
//   { name: 'Profile', path: '/profile', icon: 'person' },
//   { name: 'History', path: '/history', icon: 'history' },  
// ];

storiesOf('Nav', module).add('Nav Smart Component', () => <BrowserRouter><NavButton label="NavButton" icon="home" onClick={action('clicked')}/></BrowserRouter>);
