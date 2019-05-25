// action types
export const MOCK_REQUEST = 'MOCK_REQUEST';
export const MOCK_SUCCESS = 'MOCK_SUCCESS';
export const MOCK_ERROR = 'MOCK_ERROR';

// action creators
export const mockRequest = ({ query, feature }) => ({
  type: `${feature} ${MOCK_REQUEST}`,
  payload: query,
  meta: { query, feature },
});

export const mockSuccess = ({ response, feature }) => ({
  type: `${feature} ${MOCK_SUCCESS}`,
  payload: response,
  meta: { feature },
});

export const mockError = ({ error, feature }) => ({
  type: `${feature} ${MOCK_ERROR}`,
  payload: error,
  meta: { feature },
});
