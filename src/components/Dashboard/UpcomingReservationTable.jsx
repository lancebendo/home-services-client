import React from 'react';
import propTypes from 'prop-types';

import FlatCard, { FlatCardSection } from '../Shared/FlatCard';
import DataTable from '../Shared/DataTable';

import constants from '../constants';


const UpcomingReservationTable = (props) => {
  const { upcomingReservations } = props;
  return (
    <FlatCard {...props} headerIcon="schedule" header="Your Upcoming Reservations">
      <FlatCardSection>
        <DataTable
          className="centered highlight"
          dataSource={upcomingReservations}
          dataMappings={constants.reservationTableMappings}
        />
      </FlatCardSection>
    </FlatCard>
  );
};

UpcomingReservationTable.propTypes = {
  upcomingReservations: propTypes.arrayOf(propTypes.shape(constants.reservationShape)).isRequired,
};

export default UpcomingReservationTable;
