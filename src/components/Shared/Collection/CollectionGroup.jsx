import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import constants from '../../constants';

const Group = styled.li`
    border-color: transparent !important;
    color: ${constants.descriptionFontColor};
    font-size: ${constants.primaryDescFontSize};
`;

const CollectionGroup = ({ name, children }) => (
  <React.Fragment>
    <Group className="collection-item">
      {name}
      <span className="badge">{`${children.length} item(s)`}</span>
    </Group>
    {children}
  </React.Fragment>
);

CollectionGroup.propTypes = {
  name: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

export default CollectionGroup;
