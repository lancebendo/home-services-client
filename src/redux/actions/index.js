import {
  REQUEST_SUCCESS,
  REQUEST_FAIL,
  requestSuccess,
  requestFail,
} from './core.commons';

import {
  MOCK_REQUEST,
  mockRequest,
} from './core.mock';

import {
  ADDRESS,
  GET_ADDRESSES,
  CREATE_ADDRESS,
  UPDATE_ADDRESS,
  DELETE_ADDRESS,
  SET_ADDRESSES,
  getAddresses,
  createAddress,
  updateAddress,
  deleteAddress,
  setAddresses,
} from './feature.address';

import {
  RESERVATION,
  GET_RESERVATIONS,
  CREATE_RESERVATION,
  UPDATE_RESERVATION,
  DELETE_RESERVATION,
  SET_RESERVATIONS,
  getReservations,
  createReservation,
  updateReservation,
  deleteReservation,
  setReservations,
} from './feature.reservation';

import {
  USER,
  GET_USER,
  UPDATE_USER,
  SET_USER,
  getUser,
  updateUser,
  setUser,
} from './feature.user';

export {
  // core.commons
  REQUEST_SUCCESS,
  REQUEST_FAIL,
  requestSuccess,
  requestFail,

  // core.mock
  MOCK_REQUEST,
  mockRequest,

  // feature.address
  ADDRESS,
  GET_ADDRESSES,
  CREATE_ADDRESS,
  UPDATE_ADDRESS,
  DELETE_ADDRESS,
  SET_ADDRESSES,
  getAddresses,
  createAddress,
  updateAddress,
  deleteAddress,
  setAddresses,

  // feature.reservation
  RESERVATION,
  GET_RESERVATIONS,
  CREATE_RESERVATION,
  UPDATE_RESERVATION,
  DELETE_RESERVATION,
  SET_RESERVATIONS,
  getReservations,
  createReservation,
  updateReservation,
  deleteReservation,
  setReservations,

  // feature.user
  USER,
  GET_USER,
  UPDATE_USER,
  SET_USER,
  getUser,
  updateUser,
  setUser,
};
