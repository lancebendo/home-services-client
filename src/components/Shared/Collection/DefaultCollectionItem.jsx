import React from 'react';
import styled from 'styled-components';

import constants from '../../constants';

const Li = styled.li`
    text-align: center;
    color: ${constants.descriptionFontColor};
    font-size: ${constants.primaryDescFontSize};
`;

const CollectionGroup = () => (
  <Li className="collection-item noselect">
      There is no data to display.
  </Li>
);

export default CollectionGroup;
