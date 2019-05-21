import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import constants from '../../constants';

const FlatCardDiv = styled.div`
    background-color: white;
    border: 1px solid ${constants.flatCardBorderColor};
    border-radius: ${constants.borderRadius};
`;

const FlatCard = (props) => {
  const { children } = props;
  return (
    <FlatCardDiv {...props}>
      {children}
    </FlatCardDiv>
  );
};

FlatCard.propTypes = {
  children: propTypes.node.isRequired,
};

export default FlatCard;
