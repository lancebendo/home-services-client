export const NORMALIZE = 'NORMALIZE';

export const normalizeDomain = (domainType, domainObject, meta = {}) => ({
  type: `[${domainType}] ${NORMALIZE}`,
  payload: domainObject,
  meta: {
    ...meta,
    domainType,
  },
});
