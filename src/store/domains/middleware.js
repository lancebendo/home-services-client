
/*
as of 7/16/2019
  rules for domain middleware are
   - the baseUrl is in action.meta.baseUrl
   - the domainType is in action.meta.domainType
*/

const middleware = () => next => (action) => {
  next(action);

  if (action.type.includes('GET_')) {
    // api call on api middleware

  } else if (action.type.includes('INSERT_BATCH_')) {
    // api call on api middleware

  } else if (action.type.includes('INSERT_')) {
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

  } else if (action.type.includes('UPDATE_BATCH')) {
    // api call on api middleware

  } else if (action.type.includes('UPDATE_')) {
    // api call on api middleware

  } else if (action.type.includes('DELETE_BATCH')) {
    // api call on api middleware

  } else if (action.type.includes('DELETE')) {
    // api call on api middleware

  }
};

export default middleware;
