import { applyMiddleware } from 'redux';

import mock from './core.mock';
import address from './feature.address';
import user from './feature.user';

const featureMiddleware = [
  address,
  user,
];

const coreMiddleware = [
  mock,
];

const middlewares = applyMiddleware(...featureMiddleware, ...coreMiddleware);

export default middlewares;
