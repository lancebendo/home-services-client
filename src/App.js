import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, /*Link*/ } from 'react-router-dom';

// load components
import Header from './components/ui-components/Header';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;