import React from 'react';
import { withRouter } from 'react-router-dom';

import FlatCard, { FlatCardSection } from '../Shared/FlatCard';

// eslint-disable-next-line react/prop-types
const ServiceDomainCard = ({ history }) => (
  <FlatCard headerIcon="settings" header="Services">
    <FlatCardSection>Haha</FlatCardSection>
    <FlatCardSection isLink onClick={() => history.push('/management/service')}>Manage</FlatCardSection>
  </FlatCard>
);


export default withRouter(ServiceDomainCard);
