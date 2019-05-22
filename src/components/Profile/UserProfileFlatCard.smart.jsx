import React from 'react';
import propTypes from 'prop-types';

import FlatCard, { FlatCardSection } from '../Shared/FlatCard';
import FirstnameFormModal from './FirstnameFormModal';
import LastnameFormModal from './LastnameFormModal';
import BirthdayFormModal from './BirthdayFormModal';

const UserProfileSection = (props) => {
  const { label, value, onClick } = props;
  return (
    <FlatCardSection isLink onClick={e => onClick(e, props)}>
      <div className="row no-margin-bottom">
        <div className="col m3 s12">
          <span>{label}</span>
        </div>
        <div className="col m9 s12">
          <span>
            {value}
            <i className="material-icons right">keyboard_arrow_right</i>
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
      isFirstnameModalOpen: false,
      isLastnameModalOpen: false,
      isBirthdayModalOpen: false,
    };
  }

  openModal = (e, props) => {
    e.preventDefault();
    const { name } = props;
    this.setState({
      isFirstnameModalOpen: name === 'Firstname',
      isLastnameModalOpen: name === 'Lastname',
      isBirthdayModalOpen: name === 'Birthday',
    });
  };

  closeModal = () => {
    this.setState({
      isFirstnameModalOpen: false,
      isLastnameModalOpen: false,
      isBirthdayModalOpen: false,
    });
  };

  render() {
    const { user } = this.props;
    const { isFirstnameModalOpen, isLastnameModalOpen, isBirthdayModalOpen } = this.state;
    const { firstname, lastname, birthday } = user;
    return (
      <FlatCard {...this.props} header="User Profile">
        <UserProfileSection onClick={this.openModal} name="Firstname" label="Firstname" value={firstname} />
        <FirstnameFormModal
          firstname={firstname}
          isOpen={isFirstnameModalOpen}
          closingHandler={this.closeModal}
        />

        <UserProfileSection onClick={this.openModal} name="Lastname" label="Lastname" value={lastname} />
        <LastnameFormModal
          lastname={lastname}
          isOpen={isLastnameModalOpen}
          closingHandler={this.closeModal}
        />

        <UserProfileSection onClick={this.openModal} name="Birthday" label="Birthday" value={birthday} />
        <BirthdayFormModal
          birthday={birthday}
          isOpen={isBirthdayModalOpen}
          closingHandler={this.closeModal}
        />
      </FlatCard>
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
