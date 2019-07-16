import StoreFactory from './StoreFactory';

import domains from './domains';
import normalizer from './normalizer';
import api from './api';

export default () => {
  const storeFactory = new StoreFactory();

  // redux enhancers/features
  domains(storeFactory);
  normalizer(storeFactory);
  api(storeFactory);

  return storeFactory.create();
};
