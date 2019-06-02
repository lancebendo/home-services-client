import React from 'react';
import propTypes from 'prop-types';

import ReservationOverview from '../Reservation';
import FlatCard, { FlatCardSection } from '../Shared/FlatCard';
import DataTable from '../Shared/DataTable';
// import Modal from '../Shared/Modal';

import constants from '../constants';


const UpcomingReservationTable = (props) => {
  const { upcomingReservations } = props;
  return (
    <FlatCard {...props} headerIcon="schedule" header="Your Upcoming Reservations">
      <FlatCardSection>
        <DataTable
          className="centered"
          dataSource={upcomingReservations}
          dataMappings={constants.reservationTableMappings}
        />
        <ReservationOverview reservation={upcomingReservations[0]} />
      </FlatCardSection>
    </FlatCard>
  );
};

UpcomingReservationTable.propTypes = {
  upcomingReservations: propTypes.arrayOf(propTypes.shape(constants.reservationShape)).isRequired,
};

export default UpcomingReservationTable;
