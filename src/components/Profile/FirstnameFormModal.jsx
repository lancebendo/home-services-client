import React from 'react';
import propTypes from 'prop-types';

import Modal from '../Shared/Modal';

const FirstnameFormModal = (props) => {
  const { firstname } = props;

  return (
    <Modal title="Edit Firstname" {...props}>
      <h1>{firstname}</h1>
    </Modal>
  );
};

FirstnameFormModal.propTypes = {
  firstname: propTypes.string.isRequired,
  isOpen: propTypes.bool.isRequired,
  closingHandler: propTypes.func.isRequired,
};

export default FirstnameFormModal;
