import {
  ADDRESS,
  GET_ADDRESSES,
  CREATE_ADDRESS,
  UPDATE_ADDRESS,
  DELETE_ADDRESS,
  REQUEST_SUCCESS,
  REQUEST_FAIL,
  setAddresses,
  mockRequest,
} from '../actions';


const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';


const addressMiddleware = () => next => (action) => {
  next(action);

  switch (action.type) {
    case GET_ADDRESSES:
      if (isProduction) {
        throw new Error('Production data source not yet implemented');
      } else if (isDevelopment) {
        next(mockRequest('addresses', ADDRESS, { method: 'read' }));
      }

      break;

    case CREATE_ADDRESS:
      if (isProduction) {
        throw new Error('Production data source not yet implemented');
      } else if (isDevelopment) {
        next(mockRequest(action.payload, ADDRESS, { method: 'create', ...action.meta }));
      }
      break;

    case UPDATE_ADDRESS:
      if (isProduction) {
        throw new Error('Production data source not yet implemented');
      } else if (isDevelopment) {
        next(mockRequest(action.payload, ADDRESS, { method: 'update', ...action.meta }));
      }
      break;

    case DELETE_ADDRESS:
      if (isProduction) {
        throw new Error('Production data source not yet implemented');
      } else if (isDevelopment) {
        next(mockRequest(action.payload, ADDRESS, { method: 'delete' }));
      }
      break;

    case `${ADDRESS} ${REQUEST_SUCCESS}`:
      next(setAddresses(action.payload));
      break;

    case `${ADDRESS} ${REQUEST_FAIL}`:
      throw new Error(action.payload);
      // break;

    default:
  }
};

export default addressMiddleware;
