import React from 'react';

import ServiceDomainCard from './ServiceDomainCard';
import AddonDomainCard from './AddonDomainCard';
import PromoDomainCard from './PromoDomainCard';

const Management = () => (
  <main>
    <ServiceDomainCard className="row" />
    <AddonDomainCard className="row" />
    <PromoDomainCard className="row" />
  </main>
);

export default Management;
