import React from 'react';
import propTypes from 'prop-types';

import FlatCard, { FlatCardSection } from '../Shared/FlatCard';
import DataTable from '../Shared/DataTable';

import constants from '../constants';


const PastReservationTable = (props) => {
  const { pastReservations } = props;
  return (
    <FlatCard {...props} headerIcon="history" header="Your Past Reservations">
      <FlatCardSection>
        <DataTable
          className="centered"
          dataSource={pastReservations}
          dataMappings={constants.reservationTableMappings}
        />
      </FlatCardSection>
    </FlatCard>
  );
};

PastReservationTable.propTypes = {
  pastReservations: propTypes.arrayOf(propTypes.shape(constants.reservationShape)).isRequired,
};

export default PastReservationTable;
