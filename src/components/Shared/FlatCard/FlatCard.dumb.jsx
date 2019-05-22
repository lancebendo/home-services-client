import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import constants from '../../constants';
import FlatCardSection from './FlatCardSection.dumb';

const FlatCardDiv = styled.div`
    background-color: white;
    border: 1px solid ${constants.flatCardBorderColor};
    border-radius: ${constants.borderRadius};
`;

const HeaderSection = header => (
  <FlatCardSection>
    <h5>{header}</h5>
  </FlatCardSection>
);

const FlatCard = (props) => {
  const { children, header } = props;
  return (
    <FlatCardDiv {...props}>
      {header ? HeaderSection(header) : ''}
      {children}
    </FlatCardDiv>
  );
};

FlatCard.defaultProps = {
  header: null,
};

FlatCard.propTypes = {
  header: propTypes.string,
  children: propTypes.node.isRequired,
};

export default FlatCard;
