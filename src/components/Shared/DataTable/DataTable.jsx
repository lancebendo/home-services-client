import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import DataRow from './DataRow';

const dataMappingsShape = propTypes.shape({
  dataField: propTypes.string.isRequired,
  header: propTypes.string,
});

const Table = styled.table`
  height: 300px;

  td:empty {
    border-left: 0;
    border-right: 0;
  }
  
  .highlight>tbody>tr {
    -webkit-transition: background-color .25s ease; */
    /* transition: background-color .25s ease; */
  }
`;

const FillerRow = styled.tr`
  &:hover {
    background-color: transparent !important;
  }
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -o-transition: none !important;
  transition: none !important;
`;

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
      <Table className={combinedClass}>
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

          <FillerRow>
            {dataMappings.map(() => (<td key={Math.random()} />))}
          </FillerRow>
        </tbody>
      </Table>

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
