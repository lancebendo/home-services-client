// feature(s) name
export const RESERVATION = '[Reservation]';

// action types
export const GET_RESERVATIONS = `${RESERVATION} GET`;
export const CREATE_RESERVATION = `${RESERVATION} CREATE`;
export const UPDATE_RESERVATION = `${RESERVATION} UPDATE`;
export const DELETE_RESERVATION = `${RESERVATION} DELETE`;
export const SET_RESERVATIONS = `${RESERVATION} SET`;

// action creators
// update user needs what to fetch and the update object
export const getReservations = query => ({
  type: GET_RESERVATIONS,
  payload: query,
});

export const createReservation = (reservation, isCreatedByAdmin = false) => ({
  type: CREATE_RESERVATION,
  payload: reservation,
  meta: {
    isCreatedByAdmin,
  },
});

export const updateReservation = reservation => ({
  type: UPDATE_RESERVATION,
  payload: reservation,
});

export const deleteReservation = reservationId => ({
  type: DELETE_RESERVATION,
  payload: reservationId,
});

export const setReservations = reservations => ({
  type: SET_RESERVATIONS,
  payload: reservations,
});
