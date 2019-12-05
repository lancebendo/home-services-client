import React, { Component } from 'react';
import moment from 'moment';

// import DashboardFilter from './DashboardFilter';
import Collection, { CollectionItem } from '../Shared/Collection';
import ReservationFormModal from '../Reservation';

import constants from '../ReactConstants';
import api from '../../api';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reservations: [],
    };

    this.load = this.load.bind(this);
    this.updateReservation = this.updateReservation.bind(this);
    this.deleteReservation = this.deleteReservation.bind(this);
  }

  componentDidMount() {
    this.load();
  }

    // load
    load = () => {
      api.get('reservation')
        .then(res => this.setState({ reservations: res.data }));
    };

    // update
    updateReservation = (reservation) => {
      api.put(`reservation/${reservation.id}`, reservation)
        .then(() => window.location.reload());
    }

    // delete
    deleteReservation = (reservationId) => {
      api.delete(`reservation/${reservationId}`)
        .then(() => this.load());
    }

    render() {
      const { reservations } = this.state;

      return (
        <main>
          <h4>Upcoming Reservations</h4>
          <div className="divider" />
          <br />
          <Collection>

            {
              reservations.map((reservation) => {
                const { address } = reservation;
                const { customer } = address;
                return (
                  <React.Fragment
                    key={reservation.id}
                  >

                    <CollectionItem
                      title={moment(reservation.date).format('dddd, MMMM DD, YYYY')}
                      primaryContent={`${customer.firstname} ${customer.lastname}`}
                      secondaryContent={`${address.addressLine1} ${address.addressLine2}, ${address.city}, ${address.state}`}
                      primaryIcon="schedule"
                      secondaryIcon="navigate_next"
                      primaryIconBackground={constants.proceedFontColor}
                      isModalTrigger
                      dataTarget={`RESERVATION_FORM_${reservation.id}`}
                    />

                    <ReservationFormModal
                      key={reservation.id}
                      data={reservation}
                      updateHandler={this.updateReservation}
                      deleteHandler={this.deleteReservation}
                    />

                  </React.Fragment>
                );
              })
            }

          </Collection>
        </main>
      );
    }
}

export default Dashboard;
