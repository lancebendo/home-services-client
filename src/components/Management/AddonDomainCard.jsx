import React from 'react';

import FlatCard, { FlatCardSection } from '../Shared/FlatCard';
import ManageLink from './ManageLink';

const AddonDomainCard = props => (
  <FlatCard {...props} headerIcon="settings" header="Addons">
    <FlatCardSection>Haha</FlatCardSection>
    <ManageLink path="management/addon/" />
  </FlatCard>
);

export default AddonDomainCard;
