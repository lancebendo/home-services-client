/*
dito na yung sa url. process.env.REACT_APP_API_HOST


apiRequest
.then(apiSuccess)
.catch(apiError)


apiSuccess
if needed to be normalized
    dispatch(normalizeDomain(domainType, result, { ...action.meta }))
else
    dispatch(set(domainType, result, { ...action.meta }))

apiError
    kung ano man dapat na reaction pag error.

*/
import axios from './axios';
import {
  API_REQUEST, API_SUCCESS, API_ERROR, apiSuccess, apiError,
} from './actions';

const middleware = ({ dispatch }) => next => (action) => {
  next(action);

  switch (action.type) {
    case API_REQUEST:
      axios.request({
        url: action.meta.url,
        method: action.meta.method,
        data: action.meta.method !== 'get' ? action.payload : null,
      }).then((response) => {
        if (response.status < 400) {
          dispatch(apiSuccess(response.data.data, action.meta.domainType, action.meta));
        } else {
          apiError(response.data.data, action.meta.domainType, action.meta);
        }
      }).catch((error) => {
        dispatch(apiError(error, action.meta.domainType, action.meta));
      });
      break;

    case API_SUCCESS:
      // dito malalaman kung kelangan ng normalizer
      break;

    case API_ERROR:
    // pano ihahandle??
      break;

    default:
  }
};

export default middleware;
