import middleware from './middleware';
import { normalizeDomain, NORMALIZE } from './actions';

// ACTIONS
export { normalizeDomain, NORMALIZE };

// MIDDLEWARES AND REDUCERS
export default (storeFactory) => {
  storeFactory.insertMiddleware(middleware);

  return storeFactory;
};
