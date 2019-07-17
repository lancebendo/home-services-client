import constants from '../../constants';

import createReducer from './createReducer';
import middleware from './middleware';
import {
  get, set, insert, update, remove, GET, SET, INSERT, UPDATE, DELETE,
} from './actions';


// ACTIONS
export {
  get, set, insert, update, remove, GET, SET, INSERT, UPDATE, DELETE,
};


// MIDDLEWARES AND REDUCERS
export default (storeFactory) => {
  storeFactory.insertReducer({
    user: createReducer(constants.USER_DOMAIN),
    address: createReducer(constants.ADDRESS_DOMAIN),
    reservation: createReducer(constants.RESERVATION_DOMAIN),
    completedSession: createReducer(constants.COMPLETED_SESSION_DOMAIN),
    service: createReducer(constants.SERVICE_DOMAIN),
    addon: createReducer(constants.ADDON_DOMAIN),
    promo: createReducer(constants.PROMO_DOMAIN),
  });

  storeFactory.insertMiddleware(middleware);

  return storeFactory;
};
