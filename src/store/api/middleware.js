/*
dito na yung sa url. process.env.REACT_APP_API_HOST


apiRequest
.then(apiSuccess)
.catch(apiError)


apiSuccess
if needed to be normalized
    dispatch(normalizeDomain(domainType, result, { ...action.meta }))
else
    dispatch(set(domainType, result, { ...action.meta }))

apiError
    kung ano man dapat na reaction pag error.

*/


const middleware = () => next => (action) => {
  next(action);
};

export default middleware;
