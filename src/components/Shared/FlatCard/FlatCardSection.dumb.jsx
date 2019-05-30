import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import constants from '../../constants';

const FlatCardSectionDiv = styled.div`
  border-top: 1px solid ${constants.flatCardBorderColor};
  padding: 13px 21px;
  min-height: ${constants.minSectionHeight};
`;


const FlatCardSectionLink = styled(FlatCardSectionDiv)`
&:hover {
  background-color: ${constants.alternateHoverColor};
  cursor: pointer;
}
`;

const FlatCardSection = (props) => {
  const {
    children, isLink, isLast, noBorderTop, onClick, className,
  } = props;
  const clickHandler = isLink ? onClick : () => null;
  const SectionComponent = isLink ? FlatCardSectionLink : FlatCardSectionDiv;

  let classes = isLink ? 'waves-effect waves-light waves-block' : '';
  classes = noBorderTop ? `no-border-top ${classes}` : classes;
  classes = isLast ? `has-bottom-radius ${classes}` : classes;
  return (
    <SectionComponent {...props} onClick={e => clickHandler(e, props)} className={`${className} ${classes}`}>
      {children}
    </SectionComponent>
  );
};

FlatCardSection.defaultProps = {
  isLink: false,
  isLast: false,
  noBorderTop: false,
  onClick: () => {},
  className: '',
};

FlatCardSection.propTypes = {
  children: propTypes.node.isRequired,
  isLink: propTypes.bool,
  isLast: propTypes.bool,
  noBorderTop: propTypes.bool,
  onClick: propTypes.func,
  className: propTypes.string,
};

export default FlatCardSection;
