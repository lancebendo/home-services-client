import React from 'react';
import propTypes from 'prop-types';

const ModalFooter = (props) => {
  const { children } = props;
  return (
    <div className="modal-footer">
      {children}
    </div>
  );
};

ModalFooter.propTypes = {
  children: propTypes.node.isRequired,
};

export default ModalFooter;
