import React from 'react';
import propTypes from 'prop-types';

import Modal from '../Shared/Modal';

const LastnameFormModal = (props) => {
  const { lastname } = props;

  return (
    <Modal title="Edit Lastname" {...props}>
      <h1>{lastname}</h1>
    </Modal>
  );
};

LastnameFormModal.propTypes = {
  lastname: propTypes.string.isRequired,
  isOpen: propTypes.bool.isRequired,
  closingHandler: propTypes.func.isRequired,
};

export default LastnameFormModal;
