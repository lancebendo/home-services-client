import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const IconTag = styled.i`
  line-height: inherit !important;
`;

const Icon = ({ icon, isFontAwesome, className }) => {
  const I = !isFontAwesome
    ? (<IconTag className={`${className} material-icons`}>{icon}</IconTag>)
    : (<IconTag className={`fa fa-${icon} ${className}`} aria-hidden="true" />);

  return I;
};

Icon.defaultProps = {
  isFontAwesome: false,
  className: '',
};

Icon.propTypes = {
  icon: propTypes.string.isRequired,
  isFontAwesome: propTypes.bool,
  className: propTypes.string,
};

export default Icon;
