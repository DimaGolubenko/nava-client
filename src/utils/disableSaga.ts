import { Store } from "@reduxjs/toolkit";
import { END } from "redux-saga";
import { Task } from "redux-saga";

export const disableSaga = async (store: Store) => {
  const { dispatch } = store;

  dispatch(END);

  interface SagaStore extends Store {
    sagaTask: Task;
  }

  await (store as SagaStore).sagaTask.toPromise();
};
