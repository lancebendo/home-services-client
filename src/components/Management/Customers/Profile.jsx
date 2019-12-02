/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import UserProfileFlatCard from './UserProfileFlatCard';
import AddressTileList from './AddressTileList';

import constants from '../../ReactConstants';
import api from '../../../api';
// import { createAddress, updateAddress, deleteAddress } from '../../redux/actions';
import { BackButton } from '../../Shared/Button';

class Profile extends Component {
  constructor(props) {
    super(props);

    // dito yung initial load
    this.state = {
      customer: constants.newCustomer(),
      addresses: [],
    };

    this.load = this.load.bind(this);
    this.load();

    this.updateCustomer = this.updateCustomer.bind(this);
    this.deleteCustomer = this.deleteCustomer.bind(this);

    this.createAddress = this.createAddress.bind(this);
    this.updateAddress = this.updateAddress.bind(this);
    this.deleteAddress = this.deleteAddress.bind(this);
  }

  // load
load = () => {
  // eslint-disable-next-line react/destructuring-assignment
  const { id } = this.props.match.params;
  api.get(`customer/${id}`)
    .then((res) => {
      this.setState({
        customer: res.data,
      });
    });
}

  // userUpdate
  updateCustomer = (customer) => {
    // eslint-disable-next-line no-console
    console.log(`update ${customer.id}`);
  }

  deleteCustomer = (customer) => {
    // eslint-disable-next-line no-console
    console.log(`delete ${customer.id}`);
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
    const { customer, addresses } = this.state;
    return (
      <main>
        <BackButton link="/management/customer/" />
        <UserProfileFlatCard className="row" user={customer} updateHandler={this.updateCustomer} />

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


export default withRouter(Profile);
