// action types
export const MOCK_REQUEST = 'MOCK_REQUEST';

// action creators
export const mockRequest = (payload, feature, method) => ({
  type: `${feature} ${MOCK_REQUEST}`,
  payload,
  meta: { payload, feature, method },
});
