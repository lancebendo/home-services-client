import React from 'react';
import propTypes from 'prop-types';

import FlatCard, { FlatCardSection } from '../Shared/FlatCard';
import Spinner from '../Shared/Spinner';
import UserProfileFormModal from './UserProfileFormModal';
// import FirstnameFormModal from './FirstnameFormModal';
// import LastnameFormModal from './LastnameFormModal';
// import BirthdayFormModal from './BirthdayFormModal';

const UserProfileSection = (props) => {
  const { label, value, onClick } = props;
  return (
    <FlatCardSection {...props} isLink onClick={e => onClick(e, props)}>
      <div className="row no-margin-bottom valign-wrapper">
        <div className="col m3 s12">
          <span>{label}</span>
        </div>
        <div className="col m9 s12">
          <span>
            {value}
            {
              label !== 'Firstname'
                ? (<i className="material-icons right">keyboard_arrow_right</i>)
                : (<Spinner size="small" className="right" />)
            }
          </span>
        </div>
      </div>
    </FlatCardSection>
  );
};

UserProfileSection.propTypes = {
  label: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};

class UserProfileFlatCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      fieldToEdit: 'firstname', // so the error of uncontrolled... will go away
    };
  }

  openModal = (e, props) => {
    e.preventDefault();
    const { name } = props;
    this.setState({
      isModalOpen: true,
      fieldToEdit: name,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
      fieldToEdit: 'firstname', // para wala nang error, may default
    });
  };

  render() {
    const { user } = this.props;
    const { isModalOpen, fieldToEdit } = this.state;
    const { firstname, lastname, birthday } = user;

    return (
      <React.Fragment>
        <UserProfileFormModal
          isOpen={isModalOpen}
          fieldToEdit={fieldToEdit}
          closingHandler={this.closeModal}
          userProfile={user}
        />

        <FlatCard {...this.props} headerIcon="person_outline" header="User Profile">
          <UserProfileSection onClick={this.openModal} name="firstname" label="Firstname" value={firstname} />
          {/* <FirstnameFormModal
            firstname={firstname}
            isOpen={isFirstnameModalOpen}
            closingHandler={this.closeModal}
          /> */}

          <UserProfileSection onClick={this.openModal} name="lastname" label="Lastname" value={lastname} />
          {/* <LastnameFormModal
            lastname={lastname}
            isOpen={isLastnameModalOpen}
            closingHandler={this.closeModal}
          /> */}

          <UserProfileSection isLast onClick={this.openModal} name="birthday" label="Birthday" value={birthday} />
          {/* <BirthdayFormModal
            birthday={birthday}
            isOpen={isBirthdayModalOpen}
            closingHandler={this.closeModal}
          /> */}
        </FlatCard>
      </React.Fragment>
    );
  }
}

UserProfileFlatCard.propTypes = {
  user: propTypes.shape({
    firstname: propTypes.string.isRequired,
    lastname: propTypes.string.isRequired,
    birthday: propTypes.string.isRequired,
  }).isRequired,
};

export default UserProfileFlatCard;
