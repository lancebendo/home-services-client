import React from 'react';
import propTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';

import constants from '../../constants';

const Inp = styled.input`
  color: ${constants.defaultFontColor} !important;
`;


const Input = (props) => {
  const {
    _type, _id, field, label, value,
  } = props;

  let output = value;

  if (output instanceof Date) {
    output = moment(output).format(constants.dateFormat);
  }
  return (
    <div className="input-field">
      <Inp
        {...props}
        value={output}
        id={`${_type}_${_id}_${field}`}
        name={field}
      />
      <label htmlFor={field}>{label}</label>
    </div>
  );
};

Input.propTypes = {
  _id: propTypes.number.isRequired,
  _type: propTypes.string.isRequired,
  field: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  value: propTypes.any.isRequired,
};

export default Input;
