import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import constants from '../../constants';

const FlatCardSectionDiv = styled.div`
  border-top: 1px solid ${constants.flatCardBorderColor};
  padding: 13px 21px;
`;

const FlatCardSectionLink = styled(FlatCardSectionDiv)`
&:hover {
  background-color: ${constants.alternateHoverColor};
  cursor: pointer;
}
`;

const FlatCardSection = (props) => {
  const { children, isLink, onClick } = props;
  const clickHandler = isLink ? onClick : null;
  const SectionComponent = isLink ? FlatCardSectionLink : FlatCardSectionDiv;
  const classes = isLink ? 'waves-effect waves-light waves-block' : '';

  return (
    <SectionComponent onClick={e => clickHandler(e, props)} className={classes}>
      {children}
    </SectionComponent>
  );
};

FlatCardSection.defaultProps = {
  isLink: false,
  onClick: () => {},
};

FlatCardSection.propTypes = {
  children: propTypes.node.isRequired,
  isLink: propTypes.bool,
  onClick: propTypes.func,
};

export default FlatCardSection;
