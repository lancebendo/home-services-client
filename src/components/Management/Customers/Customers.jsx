import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

import api from '../../../api';

import Collection, { CollectionItem } from '../../Shared/Collection';
import Button, { BackButton } from '../../Shared/Button';
import CustomerFormModal from './CustomerFormModal';

import constants from '../../ReactConstants';

const DefaultButton = styled(Button)`
  background-color: ${constants.primaryColor} !important;
  color: ${constants.navFontColor} !important;
`;

class Customers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
    };

    this.load = this.load.bind(this);
    this.load();
  }

  // load
load = () => {
  api.get('customer')
    .then((res) => {
      this.setState({
        customers: res.data,
      });
    });
}

  // CustomerCreate
  createCustomer = (customer) => {
    api.post('customer', customer)
      .then(() => this.load());
  }

  // CustomerUpdate
  updateCustomer = (Customer) => {
    // eslint-disable-next-line no-console
    console.log({ Customer });
  }

  // addressCustomer
  deleteCustomer = (CustomerId) => {
    // eslint-disable-next-line no-console
    console.log(`delete ${CustomerId}`);
  }

  render() {
    const { customers } = this.state;

    return (
      <React.Fragment>
        <BackButton link="/management/" />

        <main>

          <div className="section">
            <DefaultButton
              label="CREATE CUSTOMER"
              icon="add"
              className="modal-trigger"
              data-target={`CUSTOMER_FORM_${constants.newCustomer().id}`}
            />
          </div>

          <CustomerFormModal
            data={constants.newCustomer()}
            createHandler={this.createCustomer}
          />

          <div className="section">
            <Collection>

              {
              customers.map(customer => (
                <React.Fragment>

                  <CollectionItem
                    key={customer.id}
                    title={`${customer.firstname} ${customer.lastname}`}
                    primaryContent={`Birthday : ${moment(customer.birthday).format('MMMM DD, YYYY')}`}
                    primaryIcon="schedule"
                    secondaryIcon="schedule"
                    primaryIconBackground={constants.proceedFontColor}
                    onClick={() => {
                      // eslint-disable-next-line react/prop-types
                      const { history } = this.props;
                      history.push(`/management/customer/${customer.id}`);
                    }}
                  />

                </React.Fragment>
              ))
            }

            </Collection>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default withRouter(Customers);
