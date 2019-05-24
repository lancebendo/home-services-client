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

const HeaderWrapper = styled.span`
  font-size: ${constants.secondaryHeaderFontSize};
  vertical-align: middle;
`;

const Icon = styled.i`
  line-height: 1.2;
  vertical-align: middle;
`;

const HeaderSection = ({ header, headerIcon }) => (
  <FlatCardSection noBorderTop>
    { headerIcon ? (<Icon className="material-icons left">{headerIcon}</Icon>) : null }
    <HeaderWrapper>
      {header}
    </HeaderWrapper>
  </FlatCardSection>
);

HeaderSection.defaultProps = {
  headerIcon: null,
};

HeaderSection.propTypes = {
  header: propTypes.string.isRequired,
  headerIcon: propTypes.string,
};

const FlatCard = (props) => {
  const { children, header } = props;
  return (
    <FlatCardDiv {...props}>
      {header ? (<HeaderSection {...props} />) : null}
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
