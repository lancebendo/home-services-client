// feature(s) name
export const ADDRESS = '[Address]';

// action types
export const GET_ADDRESSES = `${ADDRESS} GET`;
export const CREATE_ADDRESS = `${ADDRESS} CREATE`;
export const UPDATE_ADDRESS = `${ADDRESS} UPDATE`;
export const DELETE_ADDRESS = `${ADDRESS} DELETE`;
export const SET_ADDRESSES = `${ADDRESS} SET`;

// action creators
// update user needs what to fetch and the update object
export const getAddresses = query => ({
  type: GET_ADDRESSES,
  payload: query,
});

export const createAddress = address => ({
  type: CREATE_ADDRESS,
  payload: address,
});

export const updateAddress = address => ({
  type: UPDATE_ADDRESS,
  payload: address,
});

export const deleteAddress = addressId => ({
  type: DELETE_ADDRESS,
  payload: addressId,
});

export const setAddresses = addresses => ({
  type: SET_ADDRESSES,
  payload: addresses,
});
