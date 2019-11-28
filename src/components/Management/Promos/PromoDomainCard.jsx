import React from 'react';

import FlatCard, { FlatCardSection } from '../../Shared/FlatCard';
import ManageLink from '../ManageLink';

const PromoDomainCard = props => (
  <FlatCard {...props} headerIcon="settings" header="Promos">
    <FlatCardSection>Haha</FlatCardSection>
    <ManageLink path="/management/promo/" />
  </FlatCard>
);

export default PromoDomainCard;
