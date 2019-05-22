import React from 'react';
import propTypes from 'prop-types';

import Modal from '../Shared/Modal';

const BirthdayFormModal = (props) => {
  const { birthday } = props;

  return (
    <Modal title="Edit Birthday" {...props}>
      <h1>{birthday}</h1>
    </Modal>
  );
};

BirthdayFormModal.propTypes = {
  birthday: propTypes.string.isRequired,
  isOpen: propTypes.bool.isRequired,
  closingHandler: propTypes.func.isRequired,
};

export default BirthdayFormModal;
