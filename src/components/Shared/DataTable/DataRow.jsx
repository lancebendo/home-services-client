import React from 'react';
import propTypes from 'prop-types';
import moment from 'moment';

import constants from '../../constants';


const DataRow = (props) => {
  const { data, dataFields, onClick } = props;

  return (
    <tr onClick={e => onClick(e, props)}>
      { dataFields.map((field) => {
        let output = data[field];

        if (output instanceof Date) {
          output = moment(output).format(constants.dateFormat);
        }

        return (<td key={field}>{output}</td>);
      })}
    </tr>
  );
};

DataRow.defaultProps = {
  onClick: () => {},
};

DataRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: propTypes.object.isRequired,
  dataFields: propTypes.arrayOf(propTypes.string).isRequired,
  onClick: propTypes.func,
};

export default DataRow;
