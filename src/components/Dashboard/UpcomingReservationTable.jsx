import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

// import ReservationOverview from '../Reservation';
import FlatCard, { FlatCardSection } from '../Shared/FlatCard';
import DataTable from '../Shared/DataTable';
// import Modal from '../Shared/Modal';

import constants from '../constants';
import ReservationFormModal from '../Reservation';


const UpcomingReservationTable = (props) => {
  const { upcomingReservations } = props;
  return (
    <FlatCard {...props} headerIcon="schedule" header="Your Upcoming Reservations">
      <FlatCardSection>
        <DataTable
          className="centered"
          dataSource={upcomingReservations}
          dataMappings={constants.reservationTableMappings}
          RowModalMeta={{ Element: ReservationFormModal, pathTemplate: 'RESERVATION_FORM' }}
        />
      </FlatCardSection>
    </FlatCard>
  );
};

UpcomingReservationTable.propTypes = {
  upcomingReservations: propTypes.arrayOf(propTypes.shape(constants.reservationShape)).isRequired,
};

const mapStateToProps = state => ({
  upcomingReservations: state.reservation.collection.filter(res => res.status === 0),
});

export default connect(mapStateToProps)(UpcomingReservationTable);
