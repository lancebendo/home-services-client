// action types
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAIL = 'REQUEST_FAIL';

// action creators
export const requestSuccess = (response, feature) => ({
  type: `${feature} ${REQUEST_SUCCESS}`,
  payload: response,
  meta: { feature },
});

export const requestFail = (error, feature) => ({
  type: `${feature} ${REQUEST_FAIL}`,
  payload: error,
  meta: { feature },
});
