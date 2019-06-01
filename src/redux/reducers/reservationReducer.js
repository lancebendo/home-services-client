import { SET_RESERVATIONS } from '../actions';

const reservationState = {
  collection: [],
  loading: false,
};

const reservationReducer = (reservation = reservationState, action) => {
  switch (action.type) {
    case SET_RESERVATIONS:
      return {
        ...reservation,
        collection: [...action.payload],
      };

    default:
      return reservation;
  }
};

export default reservationReducer;
