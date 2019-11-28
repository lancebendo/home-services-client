export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR = 'API_ERROR';

export const apiRequest = (method, url, domainType, body, meta = {}) => ({
  type: `[${method} ${domainType}] ${API_REQUEST}`,
  payload: body,
  meta: {
    ...meta,
    domainType,
    method,
    url,
  },
});

export const apiSuccess = (result, domainType, meta = {}) => ({
  type: `[${domainType}] ${API_SUCCESS}`,
  payload: result,
  meta: {
    ...meta,
  },
});

export const apiError = (errorObject, domainType, meta = {}) => ({
  type: `[${domainType}] ${API_ERROR}`,
  payload: errorObject,
  meta: {
    ...meta,
  },
});
