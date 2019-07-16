import {
  applyMiddleware,
  combineReducer,
  compose,
  createStore,
} from 'redux';

class StoreFactory {
  constructor(initialState = {}) {
    this.initialState = initialState;
    this.middlewares = [];
    this.reducers = {};
  }

  insertMiddleware = (middleware) => {
    this.middlewares.push(middleware);
  }

  insertReducer = (reducer) => {
    this.reducers = { ...this.reducers, reducer };
  }

  create = () => {
    // eslint-disable-next-line no-underscore-dangle
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const enhancers = composeEnhancers(applyMiddleware(...this.middlewares));

    return createStore(combineReducer({ ...this.reducers }), this.initialState, enhancers);
  }
}

export default new StoreFactory();
