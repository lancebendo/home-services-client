import React from 'react';
import propTypes from 'prop-types';

import Modal, { ModalFooter } from '../Shared/Modal';

const UserProfileFormModalFooter = (props) => {
  const { closingHandler } = props;
  return (
    <ModalFooter>
      <button
        type="button"
        className="btn-flat waves-effect waves-light"
        onKeyPress={e => closingHandler(e, props)}
        onClick={e => closingHandler(e, props)}
      >
        Cancel
      </button>
      <button
        type="button"
        className="btn-flat waves-effect waves-light"
        onKeyPress={e => closingHandler(e, props)}
        onClick={e => closingHandler(e, props)}
      >
        Done
      </button>
    </ModalFooter>
  );
};

UserProfileFormModalFooter.propTypes = {
  closingHandler: propTypes.func.isRequired,
};

class UserProfileFormModal extends React.Component {
  constructor(props) {
    super(props);

    const { userProfile, fieldToEdit } = this.props;

    this.state = {
      userProfile,
      fieldToEdit,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAfterOpen = this.handleAfterOpen.bind(this);
  }

  handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState(prevState => ({
      userProfile: { ...prevState.userProfile, [name]: value },
    }));
  }

  handleAfterOpen() {
    const { userProfile, fieldToEdit } = this.props;
    this.setState({ userProfile, fieldToEdit }, window.M.updateTextFields);
  }

  render() {
    const { userProfile, fieldToEdit } = this.state;

    return (
      <Modal title={`Edit ${fieldToEdit}`} {...this.props} onAfterOpen={this.handleAfterOpen} footer={UserProfileFormModalFooter}>

        <div className="input-field col s12">
          <input
            name={fieldToEdit}
            id={fieldToEdit}
            type="text"
            className="validate"
            onChange={this.handleInputChange}
            value={userProfile[fieldToEdit]}
          />
          <label htmlFor={fieldToEdit}>{fieldToEdit}</label>
        </div>

      </Modal>
    );
  }
}

UserProfileFormModal.propTypes = {
  isOpen: propTypes.bool.isRequired,
  closingHandler: propTypes.func.isRequired,
  userProfile: propTypes.shape({
    firstname: propTypes.string.isRequired,
    lastname: propTypes.string.isRequired,
    birthday: propTypes.string.isRequired,
  }).isRequired,
  fieldToEdit: propTypes.string.isRequired,
};

export default UserProfileFormModal;
