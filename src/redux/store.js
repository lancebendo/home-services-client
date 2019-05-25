import { compose, createStore } from 'redux';

import middlewares from './middlewares';
import rootReducer from './reducers';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(middlewares);

const store = createStore(rootReducer, {}, enhancers);

export default store;
