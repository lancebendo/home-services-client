import middleware from './middleware';

import { apiRequest, apiSuccess, apiError } from './actions';

// ACTIONS
export { apiRequest, apiSuccess, apiError };

// MIDDLEWARES AND REDUCERS
export default (storeFactory) => {
  storeFactory.insertMiddleware(middleware);

  return storeFactory;
};
