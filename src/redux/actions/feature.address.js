// feature(s) name
export const ADDRESS = '[Address]';

// action types
export const FETCH_ADDRESSES = `${ADDRESS} FETCH`;
export const UPDATE_ADDRESS = `${ADDRESS} UPDATE`;
export const SET_ADDRESSES = `${ADDRESS} SET`;

// action creators
// update user needs what to fetch and the update object
export const fetchAddresses = ({ query }) => ({
  type: FETCH_ADDRESSES,
  payload: query,
});

export const updateAddress = ({ address }) => ({
  type: UPDATE_ADDRESS,
  payload: address,
});

export const setAddresses = ({ addresses }) => ({
  type: SET_ADDRESSES,
  payload: addresses,
});
