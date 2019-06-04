import { combineReducers } from 'redux';

import userReducer from './userReducer';
import addressReducer from './addressReducer';
import reservationReducer from './reservationReducer';

const rootReducer = combineReducers({
  user: userReducer,
  address: addressReducer,
  reservation: reservationReducer,
});

export default rootReducer;
