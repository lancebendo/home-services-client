import { SET_USER } from '../actions';

const userState = {
  firstname: '',
  lastname: '',
  birthday: '',
};

const userReducer = (user = userState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...user,
        ...action.payload,
      };

    default:
      return user;
  }
};

export default userReducer;
