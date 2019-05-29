import { SET_USER } from '../actions';

const userState = {
  firstname: '',
  lastname: '',
  birthday: new Date(),
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
