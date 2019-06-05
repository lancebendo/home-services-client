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

    const { data: reservation } = this.props;
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
      reservation: { ...prevState.reservation, [name]: value },
    }));
  }

  refresh = () => {
    const { data: reservation } = this.props;
    this.setState({ reservation });

    const context = this;
    const element = document.getElementById(constants.getElementId('reservation', reservation.id, 'reservationDate'));
    const instance = window.M.Datepicker.init(element, {
      container: document.getElementById('root'),
      format: constants.dateFormat.toLowerCase(),
      minDate: new Date(),
      defaultDate: new Date(),
      yearRange: 30,
      autoClose: true,
      onSelect(date) {
        context.handleInputChange({ target: { value: date, name: 'reservationDate' } });
      },
    });

    instance.setDate(reservation.reservationDate);

    window.M.updateTextFields();
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
            _id={reservation.id}
            _type="reservation"
            type="text"
            className="validate"
            onChange={this.handleInputChange}
            value={reservation.reservationDate}
            field="reservationDate"
            label="Date of Reservation"
          />

          <Input
            _id={reservation.id}
            _type="reservation"
            type="text"
            className="validate"
            onChange={this.handleInputChange}
            value={reservation.details}
            field="details"
            label="Name of Service"
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
  data: propTypes.shape(constants.reservationShape).isRequired,
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
