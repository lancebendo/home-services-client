import React from 'react';

// import DashboardFilter from './DashboardFilter';
import Collection, { CollectionItem } from '../Shared/Collection';
import ReservationFormModal from '../Reservation';

import constants from '../ReactConstants';

const Dashboard = () => (
  <main>
    {/* <DashboardFilter /> */}
    <Collection>

      {/*
      dito loop ng mga reservation. with modals.
      modal trigger mga collection item.
      */}

      {/* <CollectionItem
            title="Upcoming Reservation"
            primaryContent="July 2, 2019 @ 12:00 PM - 12:30 PM"
            secondaryContent="7860 Buena Park, CA"
            primaryIcon="schedule"
            secondaryIcon="schedule"
            primaryIconBackground={constants.proceedFontColor}
            onClick={() => {}}
          />
          <CollectionGroup name="Today">
            <CollectionItem title="Upcoming Reservation" primaryIcon="grade" onClick={() => {}} />
            <CollectionItem title="New Promo" primaryContent="hahaha" primaryIcon="grade" />
          </CollectionGroup> */}
      <CollectionItem
        title="Upcoming Reservation"
        primaryContent="July 2, 2019 @ 12:00 PM - 12:30 PM"
        secondaryContent="7860 Buena Park, CA"
        primaryIcon="schedule"
        secondaryIcon="schedule"
        primaryIconBackground={constants.proceedFontColor}
        isModalTrigger
        dataTarget="RESERVATION_FORM_1"
      />

      <ReservationFormModal
        data={{ ...constants.newReservation(), id: 1 }}
      />

      <CollectionItem
        title="Upcoming Reservation"
        primaryContent="July 2, 2019 @ 12:00 PM - 12:30 PM"
        secondaryContent="7860 Buena Park, CA"
        primaryIcon="schedule"
        secondaryIcon="schedule"
        primaryIconBackground={constants.proceedFontColor}
        onClick={() => {}}
      />
    </Collection>
  </main>
);

export default Dashboard;
