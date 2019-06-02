import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import Modal, { ModalContent, ModalFooter } from '../Shared/Modal';
import Button from '../Shared/Button';
import Input from '../Shared/Input';
import Header from '../Shared/Header';

import { updateUser } from '../../redux/actions';

import constants from '../constants';

class UserProfileFormModal extends React.Component {
  constructor(props) {
    super(props);

    const { user } = this.props;
    this.state = {
      user,
    };

    this.onOpenStart = this.onOpenStart.bind(this);
  }

  onOpenStart() {
    const { user, fieldToEdit } = this.props;
    this.setState({ user });

    if (user[fieldToEdit] instanceof Date) {
      const context = this;
      const element = document.querySelector('.datepicker');
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

      instance.setDate(user.birthday);
    }

    window.M.updateTextFields();
  }

  handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState(prevState => ({
      user: { ...prevState.user, [name]: value },
    }));
  }

  render() {
    const { user } = this.state;
    const { fieldToEdit, update } = this.props;
    const MODAL_ID = `USER_FORM_${user.id}_${fieldToEdit}`;
    return (
      <Modal
        {...this.props}
        id={MODAL_ID}
        isFixedFooter
        dismissible={false}
        onOpenStart={this.onOpenStart}
      >

        <ModalContent>
          <Header>{`Edit ${fieldToEdit}`}</Header>
          <Input
            field={fieldToEdit}
            label={fieldToEdit}
            type="text"
            className={fieldToEdit === 'birthday' ? 'validate datepicker' : 'validate'}
            onChange={this.handleInputChange}
            value={user[fieldToEdit]}
          />
        </ModalContent>

        <ModalFooter>
          <Button
            className="modal-close"
            label="Done"
            onClick={() => update(user)}
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

UserProfileFormModal.propTypes = {
  user: propTypes.shape(constants.userShape).isRequired,
  fieldToEdit: propTypes.string.isRequired,
  update: propTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  update: user => dispatch(updateUser(user)),
});

export default connect(null, mapDispatchToProps)(UserProfileFormModal);
