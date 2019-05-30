import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Modal, { ModalContent, ModalFooter } from '../Shared/ModalRebuild';
import Button from '../Shared/Button';
import Input from '../Shared/Input';
import Header from '../Shared/Header';

import { createAddress, updateAddress } from '../../redux/actions';

import constants from '../constants';

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

    const { address } = this.props;
    this.state = {
      address,
    };

    this.switchToDefault = this.switchToDefault.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.cancelHandler = this.cancelHandler.bind(this);
  }


  switchToDefault = () => {
    this.setState(prevState => ({
      address: { ...prevState.address, isDefault: true },
    }));
  }

  handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState(prevState => ({
      address: { ...prevState.address, [name]: value },
    }));
  }

  cancelHandler = () => {
    const { address } = this.props;
    this.setState({
      address,
    });
  }

  render() {
    const { address } = this.state;
    const { create, update } = this.props;
    const isEdit = address.id > 0;
    const submitHandler = isEdit ? update : create;

    const MODAL_ID = `ADDRESS_FORM_${address.id}`;

    return (
      <Modal id={MODAL_ID} isFixedFooter dismissible={false}>
        <ModalContent>
          <Header>
            {isEdit ? 'Edit ' : 'Create '}
             Address
          </Header>

          <Input
            type="text"
            className="validate"
            onChange={this.handleInputChange}
            value={address.houseNumber}
            field="houseNumber"
            label="House/Unit Number"
          />

          <Input
            type="text"
            className="validate"
            onChange={this.handleInputChange}
            value={address.street}
            field="street"
            label="Street"
          />

          <Input
            type="text"
            className="validate"
            onChange={this.handleInputChange}
            value={address.subdivision}
            field="subdivision"
            label="Subdivision"
          />

          <Input
            type="text"
            className="validate"
            onChange={this.handleInputChange}
            value={address.city}
            field="city"
            label="City"
          />

          <Input
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
            onClick={this.cancelHandler}
          />

        </ModalFooter>
      </Modal>
    );
  }
}

AddressFormModal.propTypes = {
  address: propTypes.shape(constants.addressShape).isRequired,
  create: propTypes.func.isRequired,
  update: propTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  create: (address, callback) => {
    dispatch(createAddress(address));
    return callback;
  },

  update: (address, callback) => {
    dispatch(updateAddress(address));
    return callback;
  },
});

export default connect(null, mapDispatchToProps)(AddressFormModal);
