import React from 'react';
import propTypes from 'prop-types';
import moment from 'moment';

import FlatCard, { FlatCardSection } from '../../Shared/FlatCard';
// import Spinner from '../Shared/Spinner';
import UserProfileFormModal from './UserProfileFormModal';

import constants from '../../ReactConstants';


const UserProfileSection = (props) => {
  const { label, value } = props;
  return (
    <FlatCardSection {...props} isLink>
      <div className="row no-margin-bottom valign-wrapper">
        <div className="col m3 s12">
          <span>{label}</span>
        </div>
        <div className="col m9 s12">
          <span>
            {value.toString()}
            {/* {
              label !== 'Firstname'
                ? (<i className="material-icons right">keyboard_arrow_right</i>)
                : (<Spinner size="small" className="right" />)
            } */}
            <i className="material-icons right">keyboard_arrow_right</i>
          </span>
        </div>
      </div>
    </FlatCardSection>
  );
};

UserProfileSection.propTypes = {
  label: propTypes.string.isRequired,
  value: propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
    propTypes.instanceOf(Date),
  ]).isRequired,
};

const UserProfileFlatCard = (props) => {
  const { user, updateHandler } = props;

  return (
    <FlatCard {...props} headerIcon="person_outline" header="User Profile">
      <UserProfileSection className="modal-trigger" data-target={`USER_FORM_${user.id}_firstname`} label="Firstname" value={user.firstname} />
      <UserProfileFormModal updateHandler={updateHandler} key={`USER_FORM_${user.id}_firstname`} fieldToEdit="firstname" data={user} />

      <UserProfileSection className="modal-trigger" data-target={`USER_FORM_${user.id}_lastname`} label="Lastname" value={user.lastname} />
      <UserProfileFormModal updateHandler={updateHandler} key={`USER_FORM_${user.id}_lastname`} fieldToEdit="lastname" data={user} />

      <UserProfileSection isLast className="modal-trigger" data-target={`USER_FORM_${user.id}_birthday`} label="Birthday" value={moment(user.birthday).format(constants.dateFormat)} />
      <UserProfileFormModal updateHandler={updateHandler} key={`USER_FORM_${user.id}_birthday`} fieldToEdit="birthday" data={user} />
    </FlatCard>
  );
};


UserProfileFlatCard.propTypes = {
  user: propTypes.shape(constants.userShape).isRequired,
  updateHandler: propTypes.func.isRequired,
};


export default UserProfileFlatCard;
