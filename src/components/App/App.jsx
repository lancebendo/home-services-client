import React from 'react';
import GlobalStyle from './GlobalStyle';

// load test component container
import TestComponent from '../TestComponent';

const App = () => (
  <React.Fragment>
    <GlobalStyle />

    <div className="App">
      <TestComponent />
    </div>
  </React.Fragment>

);

export default App;
