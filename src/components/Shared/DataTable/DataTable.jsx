import React from 'react';
import propTypes from 'prop-types';

import DataRow from './DataRow';

const dataMappingsShape = propTypes.shape({
  dataField: propTypes.string.isRequired,
  header: propTypes.string,
});

const DataTable = (props) => {
  const {
    dataSource, dataMappings, className, RowModalMeta,
  } = props;
  const combinedClass = `${className} ${RowModalMeta ? 'highlight' : ''}`; // not sure to go reponsive

  const modals = dataSource.map(data => (RowModalMeta
    ? (<RowModalMeta.Element key={data.id} data={data} />)
    : null));

  return (
    <React.Fragment>
      <table className={combinedClass}>
        <thead>
          <tr>
            {dataMappings.map(mapping => (<th key={mapping.header}>{mapping.header}</th>))}
          </tr>
        </thead>

        <tbody>
          {dataSource.map(data => (
            <DataRow
              modalTarget={RowModalMeta ? `${RowModalMeta.pathTemplate}_${data.id}` : ''}
              key={data.id}
              data={data}
              dataFields={dataMappings.map(mapping => mapping.dataField)}
            />
          ))}
        </tbody>
      </table>

      {modals}

    </React.Fragment>
  );
};

DataTable.defaultProps = {
  className: '',
  RowModalMeta: null,
};

DataTable.propTypes = {
  dataSource: propTypes.arrayOf(propTypes.object).isRequired,
  dataMappings: propTypes.arrayOf(dataMappingsShape).isRequired,
  RowModalMeta: propTypes.shape({
    Element: propTypes.elementType,
    pathTemplate: propTypes.string,
  }),
  className: propTypes.string,
};

export default DataTable;
