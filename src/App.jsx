import React from 'react';
import styled from 'styled-components';
// import { connect } from 'react-redux';
// import { BrowserRouter /* Route, Switch, Link */ } from 'react-router-dom';

// // load components
// import Header from './components/ui/Header';
// import SideNav from './components/ui/SideNav';
// import NavLink from './components/ui/NavLink';


// load test component container
import TestComponent from './TestComponent';

const GlobalStyle = styled.div`
  margin: 0;
  padding: 0;
  letter-spacing: .01438571em;
  font-family: 'Open Sans', sans-serif;
  font-family: 'Roboto', sans-serif;
  font-size: 1.04em;
  color: #212121;
`;

const App = () => (
  <GlobalStyle className="App">
    <TestComponent />
  </GlobalStyle>
);

export default App;
