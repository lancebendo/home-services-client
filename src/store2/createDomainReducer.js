import Immutable from 'seamless-immutable';

const createReducer = (domainType) => {
  const defaultState = Immutable({
    isLoading: false,
    lastUpdatedDate: null,
    collection: Immutable({}),
  });

  return (state = defaultState, action) => {
    switch (action.type) {
      case `[${domainType}] LOADING`:
        return state.merge({ isLoading: true });

      case `[${domainType}] LOADING_STOP`:
        return state.merge({ isLoading: false });

      case `[${domainType}] SET`:
        return state.merge({
          isLoading: false,
          collection: state.collection.merge(action.payload),
        });

      default:
        return state;
    }
  };
};

export default createReducer;
