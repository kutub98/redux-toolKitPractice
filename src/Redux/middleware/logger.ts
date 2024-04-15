export const logger = state => next => action => {
  next(action);
  console.log(next);
};
