import React from 'react';

// import DashboardFilter from './DashboardFilter';
import Collection, { CollectionItem } from '../Shared/Collection';

import constants from '../ReactConstants';

const Dashboard = () => (
  <main>
    {/* <DashboardFilter /> */}
    <Collection hasMoreData>
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
        onClick={() => {}}
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
