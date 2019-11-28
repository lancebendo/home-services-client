import React from 'react';
import styled from 'styled-components';

import Collection, { CollectionItem } from '../../Shared/Collection';
import Button from '../../Shared/Button';
import ServicesMenu from './ServicesMenu';
import ServiceFormModal from './ServiceFormModal';

import constants from '../../ReactConstants';

const DefaultButton = styled(Button)`
  background-color: ${constants.primaryColor} !important;
  color: ${constants.navFontColor} !important;
`;

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  // load

  // serviceCreate
  createService = (service) => {
    // eslint-disable-next-line no-alert
    console.log({ service });
  }

  // serviceUpdate
  updateService = (service) => {
    // eslint-disable-next-line no-alert
    console.log({ service });
  }

  // addressService
  deleteService = (serviceId) => {
    // eslint-disable-next-line no-alert
    alert(`delete ${serviceId}`);
  }

  render() {
    return (
      <React.Fragment>
        <ServicesMenu />

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

              <CollectionItem
                title="Upcoming Reservation"
                primaryContent="July 2, 2019 @ 12:00 PM - 12:30 PM"
                secondaryContent="7860 Buena Park, CA"
                primaryIcon="schedule"
                secondaryIcon="schedule"
                primaryIconBackground={constants.proceedFontColor}
                isModalTrigger
                dataTarget={`SERVICE_FORM_${constants.newService().id}`}
              />

              <CollectionItem
                title="Upcoming Reservation"
                primaryContent="July 2, 2019 @ 12:00 PM - 12:30 PM"
                secondaryContent="7860 Buena Park, CA"
                primaryIcon="schedule"
                secondaryIcon="schedule"
                primaryIconBackground={constants.proceedFontColor}
              />
            </Collection>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Services;
