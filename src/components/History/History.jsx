import React from 'react';

import PastReservationTable from './PastReservationTable';

const test = [
  {
    id: 1,
    user: null,
    address: null,
    reservationDate: new Date(),
    status: 1,
  },
  {
    id: 2,
    user: null,
    address: null,
    reservationDate: new Date(),
    status: 1,
  },
];

const History = () => (
  <main>
    <PastReservationTable className="row" pastReservations={test} />
  </main>
);

export default History;
