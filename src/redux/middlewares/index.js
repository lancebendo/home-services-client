import { applyMiddleware } from 'redux';

import mock from './core.mock';
import address from './feature.address';
import user from './feature.user';
import reservation from './feature.reservation';

const featureMiddleware = [
  address,
  user,
  reservation,
];

const coreMiddleware = [
  mock,
];

const middlewares = applyMiddleware(...featureMiddleware, ...coreMiddleware);

export default middlewares;
