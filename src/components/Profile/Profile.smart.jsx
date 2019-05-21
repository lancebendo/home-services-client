import React from 'react';
// import propTypes from 'prop-types';

import UserProfileFlatCard from './UserProfileFlatCard.smart';
import AddressTileList from './AddressTileList.smart';

// #region mockAddress & user
const user = {
  firstname: 'Lance',
  lastname: 'Bendo',
  birthday: 'November 28, 1993',
};

const addresses = [
  {
    city: 'Manila', street: 'Mendiola', subdivision: 'Sampaloc', houseNumber: '4182', province: 'Metro Manila', id: 1,
  },
  {
    city: 'Buena Park', subdivision: 'Las Mariposas', street: 'Valley View', houseNumber: '90620', province: 'California', id: 2,
  },
  {
    city: 'Bailen', subdivision: 'Poblacion II', street: 'Rizal', houseNumber: '4124', province: 'Cavite', id: 3,
  },
  {
    city: 'Bailen', subdivision: 'Poblacion II', street: 'Rizal', houseNumber: '4124', province: 'Cavite', id: 4,
  },
];

// #endregion

const Profile = () => (
  <main>
    <UserProfileFlatCard className="row" user={user} />
    <AddressTileList className="row" addresses={addresses} />
  </main>
);

// Profile.propTypes = {
//   user: propTypes.objectOf(propTypes.object).isRequired,
// };

export default Profile;
