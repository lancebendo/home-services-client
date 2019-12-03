import React from 'react';
import styled from 'styled-components';
// import axios from 'axios';
import api from '../../../api';

import Collection, { CollectionItem } from '../../Shared/Collection';
import Button, { BackButton } from '../../Shared/Button';
import ServiceFormModal from './ServiceFormModal';

import constants from '../../ReactConstants';

const DefaultButton = styled(Button)`
  background-color: ${constants.primaryColor} !important;
  color: ${constants.navFontColor} !important;
`;

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
    };

    this.load = this.load.bind(this);
  }

  componentDidMount() {
    this.load();
  }

  // load
  load = () => {
    api.get('service')
      .then((res) => {
        this.setState({
          services: res.data,
        });
      });
  }

  // serviceCreate
  createService = (service) => {
    api.post('service', service)
      .then(() => this.load());
  }

  // serviceUpdate
  updateService = (service) => {
    api.put(`service/${service.id}`, service)
      .then(() => this.load());
  }

  // addressService
  deleteService = (serviceId) => {
    api.delete(`service/${serviceId}`)
      .then(() => this.load());
  }

  render() {
    const { services } = this.state;

    return (
      <React.Fragment>
        <BackButton link="/management/" />

        <main>

          <div className="section">
            <DefaultButton
              label="CREATE SERVICE"
              icon="add"
              className="modal-trigger"
              data-target={`SERVICE_FORM_${constants.newService().id}`}
            />
          </div>

          <ServiceFormModal
            data={constants.newService()}
            createHandler={this.createService}
          />

          <div className="section">
            <Collection>

              {/*
            for loop for services here.
            */}

              {
              services.map(service => (
                <React.Fragment>

                  <CollectionItem
                    key={service.id}
                    title={service.name}
                    primaryContent={service.description}
                    secondaryContent={`$${service.rate}`}
                    primaryIcon="schedule"
                    secondaryIcon="schedule"
                    primaryIconBackground={constants.proceedFontColor}
                    isModalTrigger
                    dataTarget={`SERVICE_FORM_${service.id}`}
                  />

                  <ServiceFormModal
                    data={service}
                    updateHandler={this.updateService}
                    deleteHandler={this.deleteService}
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

export default Services;
