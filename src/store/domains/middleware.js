
/*
as of 7/16/2019
  rules for domain middleware are
   - the baseUrl is in action.meta.baseUrl
   - the domainType is in action.meta.domainType
*/

import {
  GET, INSERT, UPDATE, DELETE,
} from './actions';

const middleware = () => next => (action) => {
  next(action);

  if (action.type.includes(`${GET}_`)) {
    // api call on api middleware

  } else if (action.type.includes(`${INSERT}_BATCH_`)) {
    // api call on api middleware

  } else if (action.type.includes(`${INSERT}_`)) {
    // api call on api middleware
    /*
    HERE'S AN EXAMPLE!
    dispatch(request(
      action.meta.domainType,
      'POST',
      action.meta.baseUrl,
      action.payload
    ))
    */

  } else if (action.type.includes(`${UPDATE}_BATCH`)) {
    // api call on api middleware

  } else if (action.type.includes(`${UPDATE}_`)) {
    // api call on api middleware

  } else if (action.type.includes(`${DELETE}_BATCH`)) {
    // api call on api middleware

  } else if (action.type.includes(DELETE)) {
    // api call on api middleware

  }
};

export default middleware;
