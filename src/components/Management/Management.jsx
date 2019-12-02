import React from 'react';

import ServiceDomainCard from './Services/ServiceDomainCard';
import CustomerDomainCard from './Customers/CustomerDomainCard';
// import PromoDomainCard from './Promos/PromoDomainCard';

const Management = () => (
  <main>
    <ServiceDomainCard className="row" />

    <CustomerDomainCard className="row" />

    {/* <PromoDomainCard className="row" /> */}
  </main>
);

export default Management;
