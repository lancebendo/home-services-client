/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
if (!window.isMockInitialized && process.env.NODE_ENV === 'development') {
  Object.getByString = function (o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, ''); // strip a leading dot
    const a = s.split('.');
    for (let i = 0, n = a.length; i < n; ++i) {
      const k = a[i];
      if (k in o) {
        o = o[k];
      } else {
        return;
      }
    }
    return o;
  };

  class MockSource {
    constructor() {
      this.user = {
        id: 1,
        firstname: 'Lance',
        lastname: 'Bendo',
        birthday: new Date('November 28, 1993'),
      };

      this.addresses = [
        {
          id: 1,
          isDefault: false,
          city: 'Manila',
          street: 'Mendiola',
          subdivision: 'Sampaloc',
          houseNumber: '4182',
          province: 'Metro Manila',
        },
        {
          id: 2,
          isDefault: true,
          city: 'Buena Park',
          subdivision: 'Las Mariposas',
          street: 'Valley View',
          houseNumber: '90620',
          province: 'California',
        },
        {
          id: 3,
          isDefault: false,
          city: 'Bailen',
          subdivision: 'Poblacion II',
          street: 'Rizal',
          houseNumber: '4124',
          province: 'Cavite',
        },
      ];

      this.reservations = [
        {
          id: 1,
          user: this.user,
          address: this.addresses.find(ad => ad.isDefault),
          reservationDate: new Date(),
          status: 2,
          details: 'Basic Service',
        },
        {
          id: 2,
          user: this.user,
          address: this.addresses.find(ad => ad.isDefault),
          reservationDate: new Date(),
          status: 2,
          details: 'Premium Service',
        },
        {
          id: 3,
          user: this.user,
          address: this.addresses.find(ad => ad.isDefault),
          reservationDate: new Date(),
          status: 1,
          details: 'Basic Service',
        },
        {
          id: 4,
          user: this.user,
          address: this.addresses.find(ad => ad.isDefault),
          reservationDate: new Date(),
          status: 0,
          details: 'Basic Service',
        },
        {
          id: 5,
          user: this.user,
          address: this.addresses.find(ad => ad.isDefault),
          reservationDate: new Date(),
          status: 0,
          details: 'Premium Service',
        },
      ];
    }
  }
  window.mockSource = new MockSource();
}

window.isMockInitialized = true;
