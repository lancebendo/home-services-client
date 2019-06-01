import React from 'react';
import propTypes from 'prop-types';

import DataRow from './DataRow';

const dataMappingsShape = propTypes.shape({
  dataField: propTypes.string.isRequired,
  header: propTypes.string,
});

const DataTable = (props) => {
  const {
    dataSource, dataMappings, onRowClick, className,
  } = props;
  const combinedClass = `${className} `; // not sure to go reponsive
  return (
    <table className={combinedClass}>
      <thead>
        <tr>
          {dataMappings.map(mapping => (<th key={mapping.header}>{mapping.header}</th>))}
        </tr>
      </thead>

      <tbody>
        {dataSource.map(data => (
          <DataRow
            key={data.id}
            data={data}
            dataFields={dataMappings.map(mapping => mapping.dataField)}
            onClick={onRowClick}
          />
        ))}
      </tbody>
    </table>
  );
};

DataTable.defaultProps = {
  // actionRows: null,
  onRowClick: () => {},
  className: '',
};

DataTable.propTypes = {
  dataSource: propTypes.arrayOf(propTypes.object).isRequired,
  dataMappings: propTypes.arrayOf(dataMappingsShape).isRequired,
  onRowClick: propTypes.func,
  className: propTypes.string,
//   actionRows: propTypes.arrayOf(propTypes.shape({
//     label: propTypes.string.isRequired,
//     onClick: propTypes.func.isRequired,
//   })),
};

export default DataTable;
