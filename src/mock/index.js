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

  window.mockSource = {

    user: {
      uid: 1,
      firstname: 'Lance',
      lastname: 'Bendo',
      birthday: 'November 28, 1993',
    },

    addresses: [{
      uid: 1, isDefault: false, city: 'Manila', street: 'Mendiola', subdivision: 'Sampaloc', houseNumber: '4182', province: 'Metro Manila', id: 1,
    }, {
      uid: 2, isDefault: true, city: 'Buena Park', subdivision: 'Las Mariposas', street: 'Valley View', houseNumber: '90620', province: 'California', id: 2,
    }, {
      uid: 3, isDefault: false, city: 'Bailen', subdivision: 'Poblacion II', street: 'Rizal', houseNumber: '4124', province: 'Cavite', id: 3,
    }, {
      uid: 4, isDefault: false, city: 'Bailen', subdivision: 'Poblacion II', street: 'Rizal', houseNumber: '4124', province: 'Cavite', id: 4,
    }],
  };
}

window.isMockInitialized = true;
