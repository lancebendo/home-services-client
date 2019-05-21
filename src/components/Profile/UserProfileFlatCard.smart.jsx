import React from 'react';
import propTypes from 'prop-types';

import FlatCard, { FlatCardSection } from '../Shared/FlatCard';

const UserProfileSection = ({ label, value, onClick }) => (
  <FlatCardSection isLink onClick={onClick}>
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

UserProfileSection.propTypes = {
  label: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};

const UserProfileFlatCard = (props) => {
  const { user } = props;
  const { firstname, lastname, birthday } = user;
  return (
    <FlatCard {...props}>
      <UserProfileSection label="Firstname" value={firstname} />
      <UserProfileSection label="Lastname" value={lastname} />
      <UserProfileSection label="Birthday" value={birthday} />
    </FlatCard>
  );
};

UserProfileFlatCard.propTypes = {
  user: propTypes.shape({
    firstname: propTypes.string.isRequired,
    lastname: propTypes.string.isRequired,
    birthday: propTypes.string.isRequired,
  }).isRequired,
};

export default UserProfileFlatCard;
