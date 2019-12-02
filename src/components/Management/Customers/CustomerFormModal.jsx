import React from 'react';
import propTypes from 'prop-types';
// import styled from 'styled-components';

import Modal, { ModalContent, ModalFooter } from '../../Shared/Modal';
import Button from '../../Shared/Button';
import Input from '../../Shared/Input';
import Header from '../../Shared/Header';

import constants from '../../ReactConstants';

// const DefaultLabel = styled.div`
//   font-size: ${constants.secondaryDescFontSize};
//   color: ${constants.descriptionFontColor};
//   padding-left: 20px;
//   float: left !important;
//   display: table;
//   height: 100%;

//   > * {
//     display: table-cell;
//     vertical-align: middle;
//   }
// `;

// const DefaultButton = styled(Button)`
//   background-color: ${constants.primaryColor} !important;
//   color: ${constants.navFontColor} !important;
// `;


class CustomerFormModal extends React.Component {
  constructor(props) {
    super(props);

    const { data: customer } = this.props;
    this.state = {
      customer,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.refreshCustomer = this.refreshCustomer.bind(this);
  }

  componentDidMount() {
    window.M.updateTextFields();
  }

  handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState(prevState => ({
      customer: { ...prevState.customer, [name]: value },
    }));
  }

  refreshCustomer = () => {
    const { data: customer } = this.props;
    this.setState({ customer });

    window.M.updateTextFields();

    const context = this;

    const element = document.getElementById(constants.getElementId('customer', customer.id, 'birthday'));
    const instance = window.M.Datepicker.init(element, {
      container: document.getElementById('root'),
      format: constants.dateFormat.toLowerCase(),
      maxDate: new Date(),
      defaultDate: new Date(),
      yearRange: 30,
      autoClose: true,
      onSelect(date) {
        context.handleInputChange({ target: { value: date, name: 'birthday' } });
      },
    });

    instance.setDate(customer.birthday);
  }

  render() {
    const { customer } = this.state;
    const { createHandler, updateHandler } = this.props;
    const isEdit = customer.id > 0;
    const submitHandler = isEdit ? updateHandler : createHandler;

    const MODAL_ID = `CUSTOMER_FORM_${customer.id}`;

    return (
      <Modal
        id={MODAL_ID}
        isFixedFooter
        dismissible={false}
        onOpenStart={this.refreshCustomer}
      >
        <ModalContent>
          <Header>
            {isEdit ? 'Edit ' : 'Create '}
             Customer
          </Header>

          <Input
            _id={customer.id}
            _type="customer"
            type="text"
            className="validate"
            onChange={this.handleInputChange}
            value={customer.firstname}
            field="firstname"
            label="Firstname"
          />

          <Input
            _id={customer.id}
            _type="customer"
            type="text"
            className="validate"
            onChange={this.handleInputChange}
            value={customer.lastname}
            field="lastname"
            label="Lastname"
          />

          <Input
            _id={customer.id}
            _type="customer"
            field="birthday"
            label="Birthday"
            type="text"
            className="validate datepicker"
            onChange={this.handleInputChange}
            value={customer.birthday}
          />

        </ModalContent>

        <ModalFooter>

          <Button
            className="modal-close"
            label="Submit"
            onClick={() => submitHandler(customer)}
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

CustomerFormModal.defaultProps = {
  createHandler: () => {},
  updateHandler: () => {},
};

CustomerFormModal.propTypes = {
  data: propTypes.shape(constants.CustomerShape).isRequired,
  createHandler: propTypes.func,
  updateHandler: propTypes.func,
};

export default CustomerFormModal;
