import { GetServerSidePropsContext } from "next";
import { RootState } from "@/store";
import { Store } from "@reduxjs/toolkit";
import { serverDispatch } from "./serverDispatch";

export const initialDispatcher = async (
  context: GetServerSidePropsContext,
  store: Store<RootState>
) => {
  await serverDispatch(store, (dispatch) => {});

  const getStateUpdates = (state: RootState) => ({});

  return {
    store,
    getStateUpdates,
  };
};
