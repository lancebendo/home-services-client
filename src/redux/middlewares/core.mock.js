import {
  ADDRESS, USER, MOCK_REQUEST, setAddresses, setUser, requestSuccess, requestFail,
} from '../actions';

const mockMiddleware = ({ dispatch }) => next => (action) => {
  next(action);

  try {
    if (action.type.includes(MOCK_REQUEST)) {
      const { payload, feature, method } = action.meta;

      switch (method) {
        case 'create':
          // if ADDRESS use this
          if (feature === ADDRESS) {
            try {
              const newAddress = {
                ...action.payload,
                uid: window.mockSource.addresses.length + 1,
              };
              window.mockSource.addresses.push(newAddress);
              window.mockSource.addresses.sort((a, b) => {
                if (a.isDefault) return -1;
                if (b.isDefault) return -1;
                return a.uid - b.uid;
              });
              dispatch(setAddresses(window.mockSource.addresses));
            } catch (err) {
              dispatch(requestFail(err, feature));
            }
          }

          break;

        case 'read':
          try {
            const data = Object.getByString(window.mockSource, payload);
            dispatch(requestSuccess(data, feature));
          } catch (err) {
            dispatch(requestFail(err, feature));
          }

          break;

        case 'update':
          if (feature === ADDRESS) {
            try {
              const newArray = window.mockSource.addresses
                .filter(x => x.uid !== payload.uid);
              newArray.push(action.payload);
              newArray.sort((a, b) => {
                if (a.isDefault) return -1;
                if (b.isDefault) return -1;
                return a.uid - b.uid;
              });
              window.mockSource.addresses = newArray;
              dispatch(setAddresses(window.mockSource.addresses));
            } catch (err) {
              dispatch(requestFail(err, feature));
            }
          } else if (feature === USER) {
            try {
              window.mockSource.user = action.payload;
              dispatch(setUser(window.mockSource.user));
            } catch (err) {
              requestFail(err, feature);
            }
          }
          break;

        case 'delete':
          if (feature === ADDRESS) {
            try {
              const newArray = window.mockSource.addresses
                .filter(x => x.uid !== payload);
              newArray.sort((a, b) => {
                if (a.isDefault) return -1;
                if (b.isDefault) return -1;
                return a.uid - b.uid;
              });
              window.mockSource.addresses = newArray;
              dispatch(setAddresses(window.mockSource.addresses));
            } catch (err) {
              dispatch(requestFail(err, feature));
            }
          }
          break;

        default:
      }
    }
  } catch (err) {
    dispatch(requestFail(err, action.meta.feature));
  }


  // if create
  // if read
  // if update
  // if delete
};

export default mockMiddleware;
