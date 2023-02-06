import * as R from "ramda";

export const getInitialReduxState = (
  stateUpdates: {},
  currentPageReduxState: {}
) => {
  return R.mergeDeepRight(stateUpdates, currentPageReduxState);
};
