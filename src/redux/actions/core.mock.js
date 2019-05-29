// action types
export const MOCK_REQUEST = 'MOCK_REQUEST';

// action creators
export const mockRequest = (payload, feature, meta) => ({
  type: `${feature} ${MOCK_REQUEST}`,
  payload,
  meta: { payload, feature, ...meta },
});
