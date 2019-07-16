import React from 'react';
// import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';

import constants from '../../ReactConstants';

const Tr = styled.tr`
  line-height: 20px;
  height: 20px;
`;

const TrLink = styled(Tr)`
  &:hover {
    cursor: pointer;
  }
`;

const DataRow = (props) => {
  const {
    // eslint-disable-next-line no-unused-vars
    data, dataFields, modalTarget,
  } = props;
  const Row = modalTarget ? TrLink : Tr;

  const className = modalTarget ? 'modal-trigger' : '';

  return (
    <React.Fragment>
      <Row className={className} data-target={modalTarget}>
        { dataFields.map((field) => {
          let output = data[field];

          if (output instanceof Date) {
            output = moment(output).format(constants.dateFormat);
          }

          return (
            <td key={field}>{output}</td>
          );
        })
      }
      </Row>
    </React.Fragment>
  );
};

DataRow.defaultProps = {
  modalTarget: null,
};

DataRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: propTypes.object.isRequired,
  dataFields: propTypes.arrayOf(propTypes.string).isRequired,
  modalTarget: propTypes.string,
};

export default DataRow;
