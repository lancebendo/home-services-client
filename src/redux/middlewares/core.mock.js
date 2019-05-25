import { MOCK_REQUEST, requestSuccess, requestFail } from '../actions';

const mockMiddleware = ({ dispatch }) => next => (action) => {
  next(action);

  if (action.type.includes(MOCK_REQUEST)) {
    const { query, feature } = action.meta;

    try {
      const data = Object.getByString(window.mockSource, query);
      dispatch(requestSuccess(data, feature));
    } catch (err) {
      dispatch(requestFail(err, feature));
    }
  }
};

export default mockMiddleware;
