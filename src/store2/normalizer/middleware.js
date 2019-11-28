import { normalize } from 'normalizr';
import constants from '../../constants';
import { set } from '../domains';
import {
  userSchema,
  reservationSchema,
  completedSessionSchema,
  serviceSchema,
  addonSchema,
} from './schemas';

const middleware = ({ dispatch }) => next => (action) => {
  next(action);

  if (action.type.includes('NORMALIZE') && action.meta.domainType) {
    let result = null;

    switch (action.meta.domainType) {
      case constants.USER_DOMAIN:
        result = normalize(action.payload, userSchema);
        break;

      case constants.RESERVATION_DOMAIN:
        result = normalize(action.payload, reservationSchema);
        break;

      case constants.COMPLETED_SESSION_DOMAIN:
        result = normalize(action.payload, completedSessionSchema);
        break;

      case constants.SERVICE_DOMAIN:
        result = normalize(action.payload, serviceSchema);
        break;

      case constants.ADDON_DOMAIN:
        result = normalize(action.payload, addonSchema);
        break;

      default:
    }

    if (result) {
      const domainTypes = result.entities.keys();

      domainTypes.forEach((domainType) => {
        dispatch(set(domainType, result.entities[domainType], { domainType }));
      });
    }
  }
};

export default middleware;
