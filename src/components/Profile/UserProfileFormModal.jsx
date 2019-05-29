import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import Modal, { ModalFooter } from '../Shared/Modal';

import { updateUser } from '../../redux/actions';

import constants from '../constants';


const UserProfileFormModalFooter = (props) => {
  const { closingHandler, onSubmit } = props;

  const submitAndClose = (e) => {
    onSubmit(props.userProfile);
    closingHandler(e, props);
  };

  return (
    <ModalFooter>

      <button
        type="button"
        className="btn-flat waves-effect waves-light"
        onKeyPress={e => submitAndClose(e)}
        onClick={e => submitAndClose(e)}
      >
        Done
      </button>

      <button
        type="button"
        className="btn-flat waves-effect waves-light"
        onKeyPress={e => closingHandler(e, props)}
        onClick={e => closingHandler(e, props)}
      >
        Cancel
      </button>
    </ModalFooter>
  );
};

UserProfileFormModalFooter.propTypes = {
  closingHandler: propTypes.func.isRequired,
  onSubmit: propTypes.func.isRequired,
  userProfile: propTypes.shape(constants.userShape).isRequired,
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
    const context = this;
    this.setState({ userProfile, fieldToEdit }, () => {
      window.M.updateTextFields();
      if (fieldToEdit === 'birthday') {
        const instance = window.M.Datepicker.init(document.querySelector('.datepicker'), {
          format: constants.dateFormat.toLowerCase(),
          onSelect(date) {
            context.handleInputChange({ target: { value: date, name: 'birthday' } });
          },
          autoClose: true,
        });
        instance.setDate(userProfile.birthday);
      }
    });
  }

  render() {
    const { userProfile, fieldToEdit } = this.state;
    return (
      <Modal title={`Edit ${fieldToEdit}`} {...this.props} {...this.state} onAfterOpen={this.handleAfterOpen} footer={UserProfileFormModalFooter}>

        <div className="input-field col s12">
          <input
            name={fieldToEdit}
            id={fieldToEdit}
            type="text"
            className={fieldToEdit === 'birthday' ? 'validate datepicker' : 'validate'}
            onChange={this.handleInputChange}
            value={fieldToEdit === 'birthday' ? moment(userProfile[fieldToEdit]).format(constants.dateFormat) : userProfile[fieldToEdit]}
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
  userProfile: propTypes.shape(constants.userShape).isRequired,
  fieldToEdit: propTypes.string.isRequired,
  onSubmit: propTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: user => dispatch(updateUser(user)),
});

export default connect(null, mapDispatchToProps)(UserProfileFormModal);
