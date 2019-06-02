import React from 'react';
// import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';

import constants from '../../constants';

const Tr = styled.tr`
  &:hover {
    cursor: pointer;
  }
`;

const DataRow = (props) => {
  const {
    // eslint-disable-next-line no-unused-vars
    data, dataFields, clickHandler, isPointerCursor, RowModal,
  } = props;
  const Row = isPointerCursor ? Tr : styled.tr``;

  // if (RowModal) {
  //   const appRoot = document.getElementById('root');
  //   const container = document.createElement('div');
  //   appRoot.appendChild(container);
  //   const Modal = (<RowModal {...props} />);
  //   ReactDOM.render(Modal, container);
  // }

  return (
    <React.Fragment>
      <Row onClick={e => clickHandler(e, props)}>
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
  clickHandler: () => {},
  isPointerCursor: false,
  RowModal: () => null,
};

DataRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: propTypes.object.isRequired,
  dataFields: propTypes.arrayOf(propTypes.string).isRequired,
  clickHandler: propTypes.func,
  isPointerCursor: propTypes.bool,
  RowModal: propTypes.elementType,
};

export default DataRow;
