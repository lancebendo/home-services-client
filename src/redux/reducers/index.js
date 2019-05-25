import { combineReducers } from 'redux';

import userReducer from './userReducer';
import addressReducer from './addressReducer';

const rootReducer = combineReducers({
  user: userReducer,
  address: addressReducer,
});

export default rootReducer;
