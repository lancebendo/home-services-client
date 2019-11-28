import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import UserProfileFlatCard from './UserProfileFlatCard';
import AddressTileList from './AddressTileList';

import constants from '../ReactConstants';
// import { createAddress, updateAddress, deleteAddress } from '../../redux/actions';


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { };

    this.updateUser = this.updateUser.bind(this);

    this.createAddress = this.createAddress.bind(this);
    this.updateAddress = this.updateAddress.bind(this);
    this.deleteAddress = this.deleteAddress.bind(this);
  }

  // load

  // userUpdate
  updateUser = (user) => {
    // eslint-disable-next-line no-console
    console.log(`update ${user.id}`);
  }

  // addressCreate
  createAddress = (address) => {
    // eslint-disable-next-line no-console
    console.log(`create ${address.id}`);
  }

  // addressUpdate
  updateAddress = (address) => {
    // eslint-disable-next-line no-console
    console.log(`update ${address.id}`);
  }

  // addressDelete
  deleteAddress = (addressId) => {
    // eslint-disable-next-line no-console
    console.log(`delete ${addressId}`);
  }

  render() {
    const { user, addresses } = this.props;
    return (
      <main>
        <UserProfileFlatCard className="row" user={user} updateHandler={this.updateUser} />

        <AddressTileList
          className="row"
          addresses={addresses}
          createHandler={this.createAddress}
          updateHandler={this.updateAddress}
          deleteHandler={this.deleteAddress}
        />

      </main>
    );
  }
}

Profile.propTypes = {
  user: propTypes.shape(constants.userShape).isRequired,
  addresses: propTypes.arrayOf(propTypes.shape(constants.addressShape)).isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
  addresses: state.address.collection,
});

export default connect(mapStateToProps)(Profile);
