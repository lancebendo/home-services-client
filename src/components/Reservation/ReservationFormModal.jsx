import React from 'react';
import propTypes from 'prop-types';

import Modal, { ModalContent, ModalFooter } from '../Shared/Modal';
import Button from '../Shared/Button';
import Input from '../Shared/Input';
import Header from '../Shared/Header';

import constants from '../ReactConstants';

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


  componentDidMount() {
    const elems = document.querySelectorAll('select');
    window.M.FormSelect.init(elems);
  }

  handleInputChange = (e) => {
    let value = e.target.value;
    const name = e.target.name;

    if (name === 'services') {
      const elem = document.getElementsByName('services')[0];
      const instance = window.M.FormSelect.getInstance(elem);
      value = instance.getSelectedValues();
      console.log(value);
    }

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

    if (reservation.id > 0) {
      window.M.updateTextFields();
    }
  }

  render() {
    const { reservation } = this.state;
    const { createHandler, updateHandler } = this.props;
    const isEdit = reservation.id > 0;
    const submitHandler = isEdit ? updateHandler : createHandler;

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

          <select multiple name="services" value={reservation.services} onChange={this.handleInputChange}>
            <option value="" disabled>Choose service(s)</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
          <label>Materialize Multiple Select</label>

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

ReservationFormModal.defaultProps = {
  createHandler: () => {},
  updateHandler: () => {},
};

ReservationFormModal.propTypes = {
  data: propTypes.shape(constants.reservationShape).isRequired,
  createHandler: propTypes.func,
  updateHandler: propTypes.func,
};


export default ReservationFormModal;
