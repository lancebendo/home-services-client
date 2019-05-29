import {
  USER,
  GET_USER,
  UPDATE_USER,
  REQUEST_SUCCESS,
  REQUEST_FAIL,
  setUser,
  mockRequest,
} from '../actions';

const userMiddleware = () => next => (action) => {
  next(action);

  switch (action.type) {
    case GET_USER:
      if (process.env.NODE_ENV === 'development') {
        next(mockRequest('user', USER, { method: 'read' }));
      } else {
        throw new Error('Production data source not yet implemented');
      }
      break;

    case UPDATE_USER:
      if (process.env.NODE_ENV === 'development') {
        next(mockRequest(action.payload, USER, { method: 'update' }));
      } else {
        throw new Error('Production data source not yet implemented');
      }
      break;

    case `${USER} ${REQUEST_SUCCESS}`:
      next(setUser(action.payload));
      break;

    case `${USER} ${REQUEST_FAIL}`:
      throw new Error('Error handler not implemented yet for user middleware');
      // break;

    default:
  }
};

export default userMiddleware;
