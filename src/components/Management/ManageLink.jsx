import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { FlatCardSection } from '../Shared/FlatCard';

const ManageFlatCardSection = styled(FlatCardSection)`
    text-align: center;
`;

// eslint-disable-next-line react/prop-types
const ManageLink = ({ path }) => (
  <Link to={path}>
    <ManageFlatCardSection isLink isLast>Manage</ManageFlatCardSection>
  </Link>
);

ManageLink.propTypes = {
  path: propTypes.string.isRequired,
};

export default ManageLink;
