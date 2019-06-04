import {
  RESERVATION,
  GET_RESERVATIONS,
  CREATE_RESERVATION,
  UPDATE_RESERVATION,
  DELETE_RESERVATION,
  REQUEST_SUCCESS,
  REQUEST_FAIL,
  setReservations,
  mockRequest,
} from '../actions';


const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';


const ReservationMiddleware = () => next => (action) => {
  next(action);

  switch (action.type) {
    case GET_RESERVATIONS:
      if (isProduction) {
        throw new Error('Production data source not yet implemented');
      } else if (isDevelopment) {
        next(mockRequest('reservations', RESERVATION, { method: 'read' }));
      }

      break;

    case CREATE_RESERVATION:
      if (isProduction) {
        throw new Error('Production data source not yet implemented');
      } else if (isDevelopment) {
        next(mockRequest(action.payload, RESERVATION, { method: 'create', ...action.meta }));
      }
      break;

    case UPDATE_RESERVATION:
      if (isProduction) {
        throw new Error('Production data source not yet implemented');
      } else if (isDevelopment) {
        next(mockRequest(action.payload, RESERVATION, { method: 'update', ...action.meta }));
      }
      break;

    case DELETE_RESERVATION:
      if (isProduction) {
        throw new Error('Production data source not yet implemented');
      } else if (isDevelopment) {
        next(mockRequest(action.payload, RESERVATION, { method: 'delete' }));
      }
      break;

    case `${RESERVATION} ${REQUEST_SUCCESS}`:
      next(setReservations(action.payload));
      break;

    case `${RESERVATION} ${REQUEST_FAIL}`:
      throw new Error(action.payload);
      // break;

    default:
  }
};

export default ReservationMiddleware;
