import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import Modal, { ModalContent, ModalFooter } from '../Shared/Modal';
import Button from '../Shared/Button';
import Input from '../Shared/Input';
import Header from '../Shared/Header';

import { createReservation, updateReservation } from '../../redux/actions';

import constants from '../constants';

class ReservationFormModal extends React.Component {
  constructor(props) {
    super(props);

    const { reservation } = this.props;
    this.state = {
      reservation,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState(prevState => ({
      address: { ...prevState.address, [name]: value },
    }));
  }

  refresh = () => {
    const { reservation } = this.props;
    this.setState({ reservation });
  }

  render() {
    const { reservation } = this.state;
    const { create, update } = this.props;
    const isEdit = reservation.id > 0;
    const submitHandler = isEdit ? update : create;

    const MODAL_ID = `RESERVATION_FORM_${reservation.id}`;

    return (
      <Modal id={MODAL_ID} isFixedFooter dismissible={false} onOpenStart={this.refresh}>
        <ModalContent>
          <Header>
            {isEdit ? 'Edit ' : 'Create '}
             Reservation
          </Header>

          <Input
            type="text"
            className="validate"
            onChange={this.handleInputChange}
            value={reservation.id}
            field="id"
            label="id"
          />

        </ModalContent>

        <ModalFooter>

          <Button
            className="modal-close"
            label="Done"
            onClick={() => submitHandler(reservation)}
          />
          <Button
            className="modal-close"
            label="Cancel"
          />

        </ModalFooter>
      </Modal>
    );
  }
}

ReservationFormModal.propTypes = {
  reservation: propTypes.shape(constants.reservationShape).isRequired,
  create: propTypes.func.isRequired,
  update: propTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  create: (reservation, callback) => {
    dispatch(createReservation(reservation));
    return callback;
  },

  update: (reservation, callback) => {
    dispatch(updateReservation(reservation));
    return callback;
  },
});

export default connect(null, mapDispatchToProps)(ReservationFormModal);
