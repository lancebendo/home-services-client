import {
  ADDRESS,
  GET_ADDRESSES,
  REQUEST_SUCCESS,
  REQUEST_FAIL,
  setAddresses,
  mockRequest,
} from '../actions';

const addressMiddleware = () => next => (action) => {
  next(action);

  switch (action.type) {
    case GET_ADDRESSES:
      if (process.env.NODE_ENV === 'development') {
        next(mockRequest('addresses', ADDRESS));
      } else {
        throw new Error('Production data source not yet implemented');
      }
      break;

    case `${ADDRESS} ${REQUEST_SUCCESS}`:
      next(setAddresses(action.payload));
      break;

    case `${ADDRESS} ${REQUEST_FAIL}`:
      throw new Error('Error handler not implemented yet for address middleware');
      // break;

    default:
  }
};

export default addressMiddleware;
