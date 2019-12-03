/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import UserProfileFlatCard from './UserProfileFlatCard';
import AddressTileList from './AddressTileList';

import constants from '../../ReactConstants';
import api from '../../../api';
// import { createAddress, updateAddress, deleteAddress } from '../../redux/actions';
import Button, { BackButton } from '../../Shared/Button';
import { PathNotFound } from '../../ErrorHandler';

class Profile extends Component {
  constructor(props) {
    super(props);

    // dito yung initial load
    this.state = {
      customer: constants.newCustomer(),
      addresses: [],
      isLoading: true,
    };

    this.load = this.load.bind(this);

    this.updateCustomer = this.updateCustomer.bind(this);
    this.deleteCustomer = this.deleteCustomer.bind(this);

    this.createAddress = this.createAddress.bind(this);
    this.updateAddress = this.updateAddress.bind(this);
    this.deleteAddress = this.deleteAddress.bind(this);
  }

  componentDidMount() {
    this.load();
  }

  // load
load = () => {
  this.setState({ isLoading: true });

  // eslint-disable-next-line react/destructuring-assignment
  const { id } = this.props.match.params;
  api.get(`customer/${id}`)
    .then((resCustomer) => {
      // load address muna
      api.get(`customer/${id}/address`)
        .then((resAddress) => {
          this.setState({
            customer: resCustomer.data,
            addresses: resAddress.data,
            isLoading: false,
          });
        }).catch(() => this.setState({ isLoading: false }));
    }).catch(() => this.setState({ isLoading: false }));
}

  // userUpdate
  updateCustomer = (customer) => {
    api.put(`customer/${customer.id}`, customer)
      .then(() => this.load());
  }

  deleteCustomer = (customerId) => {
    const { history } = this.props;

    api.delete(`customer/${customerId}`)
      .then(() => history.push('/management/customer/'));
  }

  // addressCreate
  createAddress = (address) => {
    const { customer } = this.state;

    api.post(`customer/${customer.id}/address`, address)
      .then(() => this.load());
  }

  // addressUpdate
  updateAddress = (address) => {
    console.log('haha');
    const { customer } = this.state;

    api.put(`customer/${customer.id}/address/${address.id}`, address)
      .then(() => this.load());
  }

  // addressDelete
  deleteAddress = (addressId) => {
    const { customer } = this.state;

    api.delete(`customer/${customer.id}/address/${addressId}`)
      .then(() => this.load());
  }

  render() {
    const { customer, addresses, isLoading } = this.state;

    // if customer is not found, display not found
    if (isLoading) return (<div />);

    if (customer.id < 1) {
      return (<PathNotFound />);
    }

    return (
      <main>
        <BackButton link="/management/customer/" />

        <div className="row">
          <Button
            label="Delete Customer"
            className="right red lighten-3 modal-close"
            onClick={() => this.deleteCustomer(customer.id)}
          />
        </div>

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
