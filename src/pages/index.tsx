import Head from "next/head";
import { GetServerSidePropsContext } from "next";

import { initializeStore } from "@/store";
import { initialDispatcher } from "@/init/initialDispatcher";
import { getInitialReduxState } from "@/utils/getInitialReduxState";
import { disableSaga } from "@/utils/disableSaga";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { store, getStateUpdates } = await initialDispatcher(
    context,
    initializeStore()
  );

  await disableSaga(store);

  const state = store.getState();

  const currentPageReduxState = {};

  return {
    props: {
      initialReduxState: getInitialReduxState(
        getStateUpdates(state),
        currentPageReduxState
      ),
    },
  };
};

export default function Home() {
  return (
    <>
      <Head>
        <title>NAVA</title>
        <meta name="description" content="NAVA | Головна" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="homePage">
        <h2>Головна сторінка</h2>
      </div>
    </>
  );
}
