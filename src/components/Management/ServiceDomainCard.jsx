import React from 'react';

import FlatCard, { FlatCardSection } from '../Shared/FlatCard';
import ManageLink from './ManageLink';

const ServiceDomainCard = props => (
  <FlatCard {...props} headerIcon="settings" header="Services">
    <FlatCardSection>Haha</FlatCardSection>
    <ManageLink path="management/service" />
  </FlatCard>
);

export default ServiceDomainCard;
