import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const IconTag = styled.i`
  line-height: inherit !important;
`;

const Icon = ({ icon, isFontAwesome }) => {
  const I = !isFontAwesome
    ? (<IconTag className="material-icons">{icon}</IconTag>)
    : (<IconTag className={`fa fa-${icon}`} aria-hidden="true" />);

  return I;
};

Icon.defaultProps = {
  isFontAwesome: false,
};

Icon.propTypes = {
  icon: propTypes.string.isRequired,
  isFontAwesome: propTypes.bool,
};

export default Icon;
