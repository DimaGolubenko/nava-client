import {
  applyMiddleware,
  configureStore,
  Middleware,
  Store,
} from "@reduxjs/toolkit";
import * as R from "ramda";
import createSagaMiddleware from "@redux-saga/core";
import { Task } from "redux-saga";
import { createLogger } from "redux-logger";

import { verifyEnvironment } from "@/utils/verifyEnvironment";
import { verifyBrowser } from "@/utils/verifyBrowser";
import { serverReduxLogger } from "@/utils/serverReduxLogger";
import { rootReducer, RootState } from "./rootReducer";
import { rootSaga } from "./rootSaga";
import { useMemo } from "react";
// import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

interface SagaStore extends Store {
  sagaTask?: Task;
}

let store: Store<RootState> | undefined;

// let typedStore: Store<RootState>;
// export type AppDispatch = typeof typedStore.dispatch;
// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const getLoggerMiddleware = () => {
  const { isDevelopment } = verifyEnvironment();
  const isBrowser = verifyBrowser();

  if (isDevelopment) {
    if (isBrowser) {
      return createLogger({
        duration: true,
        timestamp: true,
        collapsed: true,
        diff: true,
      });
    } else {
      return serverReduxLogger;
    }
  }
};

export const initStore = (preloadedState: RootState | {}) => {
  const defaultState = preloadedState
    ? configureStore({ reducer: rootReducer }).getState()
    : {};

  const currentState = R.mergeDeepRight(defaultState, preloadedState);

  const SagaMiddleware = createSagaMiddleware();

  const initedStore = configureStore({
    reducer: rootReducer,
    preloadedState: currentState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: false })
        .prepend(SagaMiddleware)
        .concat(getLoggerMiddleware() as Middleware),
  });

  (initedStore as SagaStore).sagaTask = SagaMiddleware.run(rootSaga);

  return initedStore;
};

export const initializeStore = (preloadedState = {}) => {
  let initializedStore = store || initStore(preloadedState);

  if (preloadedState && store) {
    initializedStore = initStore(
      R.mergeDeepRight(store.getState(), preloadedState)
    );

    store = undefined;
  }

  if (typeof window === "undefined") {
    return initializedStore;
  }

  if (!store) {
    store = initializedStore;
  }

  return initializedStore;
};

export const useStore = (initialState = {}) => {
  return useMemo(() => initializeStore(initialState), [initialState]);
};
