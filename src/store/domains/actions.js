/*
    DELETE IS A JAVASCRIPT RESERVED WORD
    SO I REPLACED IT AS REMOVE ONLY FOR
    ACTION CREATORS
*/

const isBatchType = payload => (payload instanceof Array ? 'BATCH_' : '');

export const get = (domainType, query = null, meta = {}) => ({
  type: `[${domainType}] GET`,
  payload: query,
  meta: {
    ...meta,
    domainType,
    query,
  },
});

export const set = (domainType, payload, meta = {}) => ({
  type: `[${domainType}] SET`,
  payload,
  meta: {
    ...meta,
    domainType,
  },
});

export const insert = (domainType, payload, meta = {}) => ({
  type: `[${domainType}] INSERT_${isBatchType(payload)}`,
  payload,
  meta: {
    ...meta,
    domainType,
    isBatch: payload instanceof Array,
  },
});

export const update = (domainType, payload, meta = {}) => ({
  type: `[${domainType}] UPDATE_${isBatchType(payload)}`,
  payload,
  meta: {
    ...meta,
    domainType,
    isBatch: payload instanceof Array,
  },
});

export const remove = (domainType, payload, meta = {}) => ({
  type: `[${domainType}] DELETE_${isBatchType(payload)}`,
  payload,
  meta: {
    ...meta,
    domainType,
    isBatch: payload instanceof Array,
  },
});
