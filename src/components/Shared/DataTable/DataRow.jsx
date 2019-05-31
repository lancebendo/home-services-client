import React from 'react';
import propTypes from 'prop-types';

const DataRow = ({ data, dataFields }) => (
  <tr>
    { dataFields.map(field => (<td key={field}>{data[field]}</td>))}
  </tr>
);

DataRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: propTypes.object.isRequired,
  dataFields: propTypes.arrayOf(propTypes.string).isRequired,
};

export default DataRow;
