import { Dispatch, Store } from "@reduxjs/toolkit";

export const serverDispatch = async (
  store: Store,
  execute: (dispatch: Dispatch) => void
) => {
  const { dispatch } = store;

  execute(dispatch);
};
