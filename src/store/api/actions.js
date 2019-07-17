export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR = 'API_ERROR';

export const apiRequest = (domainType, method, url, body, meta = {}) => ({
  type: `[${method} ${domainType}] ${API_REQUEST}`,
  payload: body,
  meta: {
    ...meta,
    domainType,
    method,
    url,
  },
});

export const apiSuccess = (domainType, result, meta = {}) => ({
  type: `[${domainType}] ${API_SUCCESS}`,
  payload: result,
  meta: {
    ...meta,
  },
});

export const apiError = (domainType, errorObject, meta = {}) => ({
  type: `[${domainType}] ${API_ERROR}`,
  payload: errorObject,
  meta: {
    ...meta,
  },
});
