import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Modal, { ModalContent, ModalFooter } from '../Shared/ModalRebuild';

import { createAddress, updateAddress } from '../../redux/actions';

import constants from '../constants';


const DefaultLabel = styled.span`
  font-size: ${constants.secondaryDescFontSize};
  color: ${constants.descriptionFontColor};
  padding-left: 20px;
`;

const DefaultButton = styled.button`
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
    this.handleAfterOpen = this.handleAfterOpen.bind(this);
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

  handleAfterOpen() {
    const { address } = this.props;
    this.setState({ address }, window.M.updateTextFields);
  }

  render() {
    const { address } = this.state;
    const MODAL_ID = `ADDRESS_${address.id}`;

    return (
      <Modal id={MODAL_ID} isFixedFooter dismissible={false}>
        <ModalContent>
          <div className="input-field col s12">
            <input
              name="houseNumber"
              id="unit_number"
              type="text"
              className="validate"
              onChange={this.handleInputChange}
              value={address.houseNumber}
            />
            <label htmlFor="unit_number">Unit No.</label>
          </div>

          <div className="input-field col s12">
            <input
              name="street"
              id="street"
              type="text"
              className="validate"
              onChange={this.handleInputChange}
              value={address.street}
            />
            <label htmlFor="street">Street</label>
          </div>

          <div className="input-field col s12">
            <input
              name="subdivision"
              id="village_name"
              type="text"
              className="validate"
              onChange={this.handleInputChange}
              value={address.subdivision}
            />
            <label htmlFor="village_name">Subdivision</label>
          </div>

          <div className="input-field col s12">
            <input
              name="city"
              id="city"
              type="text"
              className="validate"
              onChange={this.handleInputChange}
              value={address.city}
            />
            <label htmlFor="city">City</label>
          </div>

          <div className="input-field col s12">
            <input
              name="province"
              id="province"
              type="text"
              className="validate"
              onChange={this.handleInputChange}
              value={address.province}
            />
            <label htmlFor="city">Province</label>
          </div>
        </ModalContent>

        <ModalFooter>
          {address.isDefault ? (
            <DefaultLabel className="left">{address.isDefault ? 'DEFAULT ADDRESS' : <br />}</DefaultLabel>
          ) : (
            <DefaultButton
              type="button"
              className="left btn waves-effect waves-light modal-close"
            >
        Set as Default
            </DefaultButton>
          )}

          <button
            type="button"
            className="btn-flat waves-effect waves-light modal-close"
          >
        Done
          </button>

          <button
            type="button"
            className="btn-flat waves-effect waves-light modal-close"
          >
        Cancel
          </button>
        </ModalFooter>
      </Modal>
    );
  }
}

AddressFormModal.propTypes = {
  address: propTypes.shape(constants.addressShape).isRequired,
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
