import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import api from '../../api';

import Modal, { ModalContent, ModalFooter } from '../Shared/Modal';
import Button from '../Shared/Button';
import Input from '../Shared/Input';
import Header from '../Shared/Header';

import constants from '../ReactConstants';


const CancelButton = styled(Button)`
  background-color: ${constants.color} !important;
  color: ${constants.navFontColor} !important;
`;

class ReservationFormModal extends React.Component {
  constructor(props) {
    super(props);

    const { data: reservation } = this.props;
    this.state = {
      reservation,
      services: [],
      customers: [],
      isNew: reservation.id < 1,
      addresses: [],
      // customerIsSelected: false,
      canSubmit: false,
    };


    this.handleInputChange = this.handleInputChange.bind(this);
    this.reRenderSelect = this.reRenderSelect.bind(this);
    this.refresh = this.refresh.bind(this);

    this.reRenderSelect();
    this.load = this.load.bind(this);
  }

  componentDidMount() {
    this.load();
  }

  // load
  load = () => {
    api.get('service')
      .then((res) => {
        this.setState({ services: res.data }, () => {
          const { reservation, isNew } = this.state;

          this.reRenderSelect();

          if (!isNew && reservation.address.customer.id > 0) {
            this.loadAddresses(reservation.address.customer.id);
          }
        });
      });

    api.get('customer')
      .then((res) => {
        this.setState({ customers: res.data }, () => this.reRenderSelect());
      });
  }

  loadAddresses = (customerId) => {
    api.get(`customer/${customerId}/address`)
      .then((res) => {
        this.setState(prevState => ({
          addresses: res.data,
          reservation: {
            ...prevState.reservation,
            address: {
              ...prevState.reservation.address,
              customer: { id: customerId },
            },
          },
        }), () => this.reRenderSelect());
      });
  }

  handleInputChange = (e) => {
    let value = e.target.value;
    const name = e.target.name;
    const { reservation } = this.state;

    if (name === 'address') {
      const address = { ...reservation.address, id: value };
      this.setState(prevState => ({
        reservation: { ...prevState.reservation, address },
      }), () => this.setState({ canSubmit: this.checkIfCanSubmit() }));
    } else if (name === 'customer') {
      const address = { id: 0, customer: { id: value } };
      this.setState(prevState => ({
        reservation: { ...prevState.reservation, address },
      }), () => this.setState({ canSubmit: this.checkIfCanSubmit() }));
    } else if (name === 'reservationServices') {
      const elem = document.getElementById(`${reservation.id}_reservationServices`);
      const instance = window.M.FormSelect.getInstance(elem);
      value = instance.getSelectedValues().map(v => ({ serviceId: v }));

      this.setState(prevState => ({
        reservation: { ...prevState.reservation, [name]: value },
      }), () => this.setState({ canSubmit: this.checkIfCanSubmit() }));
    } else {
      this.setState(prevState => ({
        reservation: { ...prevState.reservation, [name]: value },
      }), () => this.setState({ canSubmit: this.checkIfCanSubmit() }));
    }


    if (name === 'customer') {
      this.loadAddresses(value);
    }
  }

  checkIfCanSubmit = () => {
    const { reservation } = this.state;
    return reservation.reservationServices.find(rs => rs.serviceId !== 0)
    && reservation.address.id > 0
    && reservation.address.customer.id > 0;
  }

  reRenderSelect = () => {
    const { reservation } = this.state;

    const customerSelect = document.getElementById(`${reservation.id}_customer`);
    window.M.FormSelect.init(customerSelect);

    const addressSelect = document.getElementById(`${reservation.id}_address`);
    window.M.FormSelect.init(addressSelect);

    const servicesSelect = document.getElementById(`${reservation.id}_reservationServices`);
    window.M.FormSelect.init(servicesSelect);
  }

  refresh = () => {
    this.load();

    const {
      data: reservation,
    } = this.props;
    this.setState({ reservation });

    const context = this;
    const element = document.getElementById(constants.getElementId(
      'reservation', reservation.id, 'date',
    ));
    const instance = window.M.Datepicker.init(element, {
      container: document.getElementById('root'),
      format: constants.dateFormat.toLowerCase(),
      minDate: new Date(),
      defaultDate: new Date(),
      yearRange: 30,
      autoClose: true,
      onSelect(date) {
        context.handleInputChange({ target: { value: date, name: 'date' } });
      },
    });

    instance.setDate(reservation.date);

    if (reservation.id > 0) {
      window.M.updateTextFields();
    }
  }

  render() {
    const {
      reservation, customers, addresses, services, isNew, canSubmit,
    } = this.state;
    const { createHandler, updateHandler, deleteHandler } = this.props;

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

          {/*
        yung selected, depende lang kung null or walang value yung assigned field
*/}

          <div className="input-field row">
            <select
              multiple
              disabled={!isNew}
              id={`${reservation.id}_reservationServices`}
              name="reservationServices"
              value={reservation.reservationServices.map(rs => rs.serviceId)}
              onChange={this.handleInputChange}
            >
              <option value="0" disabled>Choose service(s)</option>
              {
            services.map(service => (
              <option key={service.id} value={service.id}>{service.name}</option>
            ))
            }
            </select>
            <label>Service(s)</label>
          </div>

          <div className="input-field row">
            <select
              name="customer"
              id={`${reservation.id}_customer`}
              value={reservation.address.customer.id}
              onChange={this.handleInputChange}
              disabled={!isNew}
            >
              <option value="0" disabled>Choose a Customer</option>
              {
            customers.map(customer => (
              <option key={customer.id} value={customer.id}>{`Cust. # ${customer.id}: ${customer.firstname} ${customer.lastname}`}</option>
            ))
            }
            </select>
            <label>Customer</label>
          </div>

          <div className="input-field row">
            <select
              disabled={reservation.address.customer.id < 1 || !isNew}
              id={`${reservation.id}_address`}
              name="address"
              value={reservation.address.id}
              onChange={this.handleInputChange}
            >
              <option value="0" disabled>Choose an address</option>

              {
            addresses.map(address => (
              <option key={address.id} value={address.id}>
                {`${address.addressLine1} ${address.addressLine2}, ${address.city}, ${address.state}`}
              </option>
            ))
            }
            </select>
            <label>Address</label>
          </div>

          <Input
            _id={reservation.id}
            _type="reservation"
            type="text"
            className="validate"
            onChange={this.handleInputChange}
            value={reservation.date}
            field="date"
            label="Date of Reservation"
          />

          <Input
            _id={reservation.id}
            _type="reservation"
            type="text"
            className="validate"
            onChange={this.handleInputChange}
            value={reservation.additionalDetails}
            field="additionalDetails"
            label="Additional details"
          />

        </ModalContent>

        <ModalFooter>

          {reservation.id > 0 ? (
            <CancelButton
              label="Cancel Reservation"
              className="left red lighten-3 modal-close"
              onClick={() => deleteHandler(reservation.id)}
            />
          ) : null}

          <Button
            disabled={!canSubmit}
            className="modal-close"
            label="Submit"
            onClick={() => submitHandler(reservation)}
          />

          <Button
            className="modal-close"
            label="Close"
          />

        </ModalFooter>
      </Modal>
    );
  }
}

ReservationFormModal.defaultProps = {
  createHandler: () => {},
  updateHandler: () => {},
  deleteHandler: () => {},
};

ReservationFormModal.propTypes = {
  data: propTypes.shape(constants.reservationShape).isRequired,
  createHandler: propTypes.func,
  updateHandler: propTypes.func,
  deleteHandler: propTypes.func,
};


export default ReservationFormModal;
