import React from 'react';
import propTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';

import Modal, { ModalContent, ModalFooter } from '../Shared/ModalRebuild';
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

    this.cancelHandler = this.cancelHandler.bind(this);
  }

  componentDidMount = () => window.M.updateTextFields();


  handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState(prevState => ({
      user: { ...prevState.user, [name]: value },
    }));
  }

  cancelHandler = () => {
    const { user } = this.props;
    this.setState({ user });
  }

  //   handleAfterOpen() {
  //     const { user, fieldToEdit } = this.props;
  //     const context = this;
  //     this.setState({ userProfile, fieldToEdit }, () => {
  //       window.M.updateTextFields();
  //       if (fieldToEdit === 'birthday') {
  //         const instance = window.M.Datepicker.init(document.querySelector('.datepicker'), {
  //           container: document.getElementsByClassName('ReactModal__Overlay--after-open')[0],
  //           format: constants.dateFormat.toLowerCase(),
  //           maxDate: new Date(),
  //           defaultDate: new Date(),
  //           yearRange: 30,
  //           onSelect(date) {
  //             context.handleInputChange({ target: { value: date, name: 'birthday' } });
  //           },
  //           autoClose: true,
  //         });
  //         instance.setDate(userProfile.birthday);
  //       }
  //     });
  //   }

  render() {
    const { user } = this.state;
    const { fieldToEdit, update } = this.props;
    const MODAL_ID = `USER_FORM_${user.id}_${fieldToEdit}`;
    return (
      <Modal key={user.id} id={MODAL_ID} isFixedFooter dismissible={false}>

        <ModalContent>
          <Header>{`Edit ${fieldToEdit}`}</Header>
          <Input
            field={fieldToEdit}
            label={fieldToEdit}
            type="text"
            className={fieldToEdit === 'birthday' ? 'validate datepicker' : 'validate'}
            onChange={this.handleInputChange}
            value={fieldToEdit === 'birthday' ? moment(user[fieldToEdit]).format(constants.dateFormat) : user[fieldToEdit]}
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
            onClick={this.cancelHandler}
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
