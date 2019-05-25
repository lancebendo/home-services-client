import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';

import reduxStore from './redux/store';
// import thunk from 'redux-thunk';
import './mock';

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
,
  </Provider>,
  document.getElementById('root'),
);
