// feature(s) name
export const USER = '[User]';

// action types
export const FETCH_USER = `${USER} FETCH`;
export const UPDATE_USER = `${USER} UPDATE`;
export const SET_USER = `${USER} SET`;

// action creators
// fetch user needs what to fetch
// update user needs what to fetch and the update object
export const fetchUser = ({ query }) => ({
  type: FETCH_USER,
  payload: query,
});

export const updateUser = ({ user }) => ({
  type: UPDATE_USER,
  payload: user,
});

export const setUser = ({ user }) => ({
  type: UPDATE_USER,
  payload: user,
});
