import React from 'react';

import FlatCard/* , { FlatCardSection } */ from '../../Shared/FlatCard';
import ManageLink from '../ManageLink';

const CustomerDomainCard = props => (
  <FlatCard {...props} headerIcon="person" header="Customers">
    {/* <FlatCardSection>Haha</FlatCardSection> */}
    <ManageLink path="/management/customer/" />
  </FlatCard>
);

export default CustomerDomainCard;
