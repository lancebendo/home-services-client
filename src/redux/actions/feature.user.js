// feature(s) name
export const USER = '[User]';

// action types
export const GET_USER = `${USER} GET`;
export const UPDATE_USER = `${USER} UPDATE`;
export const SET_USER = `${USER} SET`;

// action creators
// get user needs what to fetch
// update user needs what to fetch and the update object
export const getUser = query => ({
  type: GET_USER,
  payload: query,
});

export const updateUser = user => ({
  type: UPDATE_USER,
  payload: user,
});

export const setUser = user => ({
  type: SET_USER,
  payload: user,
});
