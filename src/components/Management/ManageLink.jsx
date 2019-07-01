import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { FlatCardSection } from '../Shared/FlatCard';

const ManageFlatCardSection = styled(FlatCardSection)`
    text-align: center;
`;

// eslint-disable-next-line react/prop-types
const ManageLink = () => (
  <Link to="/management/service">
    <ManageFlatCardSection isLink>Manage</ManageFlatCardSection>
  </Link>
);

export default ManageLink;
