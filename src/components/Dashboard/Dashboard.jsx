import React from 'react';

import DashboardFilter from './DashboardFilter';
import Collection from '../Shared/Collection';


const Dashboard = () => (
  <main>
    <DashboardFilter />
    <Collection isLoading />
  </main>
);

export default Dashboard;
