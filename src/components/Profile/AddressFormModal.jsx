import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import Modal, { ModalContent, ModalFooter } from '../Shared/Modal';
import Button from '../Shared/Button';
import Input from '../Shared/Input';
import Header from '../Shared/Header';

import constants from '../ReactConstants';

const DefaultLabel = styled.div`
  font-size: ${constants.secondaryDescFontSize};
  color: ${constants.descriptionFontColor};
  padding-left: 20px;
  float: left !important;
  display: table;
  height: 100%;

  > * {
    display: table-cell;
    vertical-align: middle;
  }
`;

const DefaultButton = styled(Button)`
  background-color: ${constants.primaryColor} !important;
  color: ${constants.navFontColor} !important;
`;


class AddressFormModal extends React.Component {
  constructor(props) {
    super(props);

    const { data: address } = this.props;
    this.state = {
      address,
      // isSwitchedToDefault: false,
    };

    this.switchToDefault = this.switchToDefault.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.refreshAddress = this.refreshAddress.bind(this);
  }


  switchToDefault = () => {
    this.setState(prevState => ({
      address: { ...prevState.address, isDefault: true },
      // isSwitchedToDefault: true,
    }));
  }

  handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState(prevState => ({
      address: { ...prevState.address, [name]: value },
    }));
  }

  refreshAddress = () => {
    const { data: address } = this.props;
    this.setState({ address });

    window.M.updateTextFields();
  }

  render() {
    const { address } = this.state;
    const { createHandler, updateHandler } = this.props;
    const isEdit = address.id > 0;
    const submitHandler = isEdit ? updateHandler : createHandler;

    const MODAL_ID = `ADDRESS_FORM_${address.id}`;

    return (
      <Modal id={MODAL_ID} isFixedFooter dismissible={false} onOpenStart={this.refreshAddress}>
        <ModalContent>
          <Header>
            {isEdit ? 'Edit ' : 'Create '}
             Address
          </Header>

          <Input
            _id={address.id}
            _type="address"
            type="text"
            className="validate"
            onChange={this.handleInputChange}
            value={address.houseNumber}
            field="houseNumber"
            label="House/Unit Number"
          />

          <Input
            _id={address.id}
            _type="address"
            type="text"
            className="validate"
            onChange={this.handleInputChange}
            value={address.street}
            field="street"
            label="Street"
          />

          <Input
            _id={address.id}
            _type="address"
            type="text"
            className="validate"
            onChange={this.handleInputChange}
            value={address.subdivision}
            field="subdivision"
            label="Subdivision"
          />

          <Input
            _id={address.id}
            _type="address"
            type="text"
            className="validate"
            onChange={this.handleInputChange}
            value={address.city}
            field="city"
            label="City"
          />

          <Input
            _id={address.id}
            _type="address"
            type="text"
            className="validate"
            onChange={this.handleInputChange}
            value={address.province}
            field="province"
            label="Province"
          />
        </ModalContent>

        <ModalFooter>
          {address.isDefault ? (
            <DefaultLabel>
              {address.isDefault ? (<span>DEFAULT ADDRESS</span>) : <br />}
            </DefaultLabel>
          ) : (
            <DefaultButton
              label="Set as Default"
              className="left"
              onClick={this.switchToDefault}
            />
          )}

          <Button
            className="modal-close"
            label="Done"
            onClick={() => submitHandler(address)}
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

AddressFormModal.propTypes = {
  data: propTypes.shape(constants.addressShape).isRequired,
  createHandler: propTypes.func.isRequired,
  updateHandler: propTypes.func.isRequired,
};

export default AddressFormModal;
