import { SET_ADDRESSES } from '../actions';

const addressState = {
  collection: [],
  loading: false,
};

const addressReducer = (address = addressState, action) => {
  switch (action.type) {
    case SET_ADDRESSES:
      return {
        ...address,
        collection: [...action.payload],
      };

    default:
      return address;
  }
};

export default addressReducer;
