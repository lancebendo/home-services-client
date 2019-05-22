import React from 'react';
import propTypes from 'prop-types';

import Modal from '../Shared/Modal';

const AddressFormModal = (props) => {
  const { address } = props;

  return (
    <Modal title="Address Form" {...props}>
      <h1>{`${address.city}haha`}</h1>
    </Modal>
  );
};

AddressFormModal.propTypes = {
  address: propTypes.shape({
    houseNumber: propTypes.string.isRequired,
    street: propTypes.string.isRequired,
    subdivision: propTypes.string.isRequired,
    city: propTypes.string.isRequired,
    province: propTypes.string.isRequired,
  }).isRequired,
  isOpen: propTypes.bool.isRequired,
  closingHandler: propTypes.func.isRequired,
};

export default AddressFormModal;
