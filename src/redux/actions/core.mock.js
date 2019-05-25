// action types
export const MOCK_REQUEST = 'MOCK_REQUEST';

// action creators
export const mockRequest = (query, feature) => ({
  type: `${feature} ${MOCK_REQUEST}`,
  payload: query,
  meta: { query, feature },
});
