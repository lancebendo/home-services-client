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


class ServiceFormModal extends React.Component {
  constructor(props) {
    super(props);

    const { data: service } = this.props;
    this.state = {
      service,
    };

    this.handleInputChange = this.handleInputChange.bind(this);

    window.M.updateTextFields();
  }

  handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState(prevState => ({
      service: { ...prevState.service, [name]: value },
    }));
  }

  render() {
    const { service } = this.state;
    const { createHandler, updateHandler } = this.props;
    const isEdit = service.id > 0;
    const submitHandler = isEdit ? updateHandler : createHandler;

    const MODAL_ID = `SERVICE_FORM_${service.id}`;

    return (
      <Modal id={MODAL_ID} isFixedFooter dismissible={false} onOpenStart={this.refreshAddress}>
        <ModalContent>
          <Header>
            {isEdit ? 'Edit ' : 'Create '}
             Service
          </Header>

          <Input
            _id={service.id}
            _type="service"
            type="text"
            className="validate"
            onChange={this.handleInputChange}
            value={service.name}
            field="name"
            label="Service Name"
          />

          <Input
            _id={service.id}
            _type="service"
            type="text"
            className="validate"
            onChange={this.handleInputChange}
            value={service.description}
            field="description"
            label="Description"
          />

          <Input
            _id={service.id}
            _type="service"
            type="number"
            className="validate"
            onChange={this.handleInputChange}
            value={service.rate}
            field="rate"
            label="Rate"
          />

        </ModalContent>

        <ModalFooter>

          <Button
            className="modal-close"
            label="Done"
            onClick={() => submitHandler(service)}
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

ServiceFormModal.defaultProps = {
  createHandler: () => {},
  updateHandler: () => {},
};

ServiceFormModal.propTypes = {
  data: propTypes.shape(constants.serviceShape).isRequired,
  createHandler: propTypes.func,
  updateHandler: propTypes.func,
};

export default ServiceFormModal;
