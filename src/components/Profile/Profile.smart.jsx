import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import UserProfileFlatCard from './UserProfileFlatCard.smart';
import AddressTileList from './AddressTileList.smart';

import constants from '../constants';


const Profile = (props) => {
  const { user, addresses } = props;
  return (
    <main>
      <UserProfileFlatCard className="row" user={user} />
      <AddressTileList className="row" addresses={addresses} />
    </main>
  );
};


Profile.propTypes = {
  user: propTypes.shape(constants.userShape).isRequired,
  addresses: propTypes.arrayOf(propTypes.shape(constants.addressShape)).isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
  addresses: state.address.collection,
});


export default connect(mapStateToProps)(Profile);
