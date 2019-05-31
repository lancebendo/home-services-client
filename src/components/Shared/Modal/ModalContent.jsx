import React from 'react';
import propTypes from 'prop-types';

const ModalContent = ({ children }) => (
  <div className="modal-content">
    {children}
  </div>
);

ModalContent.propTypes = {
  children: propTypes.node.isRequired,
};


export default ModalContent;
