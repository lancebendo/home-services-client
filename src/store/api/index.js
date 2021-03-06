import middleware from './middleware';

export * from './actions';


// MIDDLEWARES AND REDUCERS
export default (storeFactory) => {
  storeFactory.insertMiddleware(middleware);

  return storeFactory;
};
