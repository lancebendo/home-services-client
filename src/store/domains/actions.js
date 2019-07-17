/*
    DELETE IS A JAVASCRIPT RESERVED WORD
    SO I REPLACED IT AS REMOVE ONLY FOR
    ACTION CREATORS
*/

export const GET = 'GET';
export const SET = 'SET';
export const INSERT = 'INSERT';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';


const isBatchType = payload => (payload instanceof Array ? 'BATCH_' : '');

export const get = (domainType, query = null, meta = {}) => ({
  type: `[${domainType}] ${GET}`,
  payload: query,
  meta: {
    ...meta,
    domainType,
    query,
  },
});

export const set = (domainType, payload, meta = {}) => ({
  type: `[${domainType}] ${SET}`,
  payload,
  meta: {
    ...meta,
    domainType,
  },
});

export const insert = (domainType, payload, meta = {}) => ({
  type: `[${domainType}] ${INSERT}_${isBatchType(payload)}`,
  payload,
  meta: {
    ...meta,
    domainType,
    isBatch: payload instanceof Array,
  },
});

export const update = (domainType, payload, meta = {}) => ({
  type: `[${domainType}] ${UPDATE}_${isBatchType(payload)}`,
  payload,
  meta: {
    ...meta,
    domainType,
    isBatch: payload instanceof Array,
  },
});

export const remove = (domainType, payload, meta = {}) => ({
  type: `[${domainType}] ${DELETE}_${isBatchType(payload)}`,
  payload,
  meta: {
    ...meta,
    domainType,
    isBatch: payload instanceof Array,
  },
});
