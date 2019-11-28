import { schema } from 'normalizr';

// ENTITIES
const userEntity = new schema.Entity('users');
const addressEntity = new schema.Entity('address');
const promoEntity = new schema.Entity('promos');
const reservationEntity = new schema.Entity('reservations');
const serviceEntity = new schema.Entity('services');
const addonEntity = new schema.Entity('addons');

export const userSchema = new schema.Object({
  addresses: [addressEntity],
  userPromos: [promoEntity],
  userProviderAssignments: [reservationEntity],
});

export const reservationSchema = new schema.Object({
  user: userEntity,
  userPromo: [promoEntity],
  assignedUserProviders: [userEntity],
  services: [new schema.Object({
    service: serviceEntity,
    promos: [promoEntity],
  })],
  addons: [new schema.Object({
    addon: addonEntity,
    promos: [promoEntity],
  })],
});

export const completedSessionSchema = new schema.Object({
  user: userEntity,
  userPromo: [promoEntity],
  assignedUserProviders: [userEntity],
  services: [new schema.Object({
    service: serviceEntity,
    promos: [promoEntity],
  })],
  addons: [new schema.Object({
    addon: addonEntity,
    promos: [promoEntity],
  })],
});

export const serviceSchema = new schema.Object({
  availableAddons: addonEntity,
  availablePromos: promoEntity,
});

export const addonSchema = new schema.Object({
  serviceAssigned: serviceEntity,
  availablePromos: promoEntity,
});
