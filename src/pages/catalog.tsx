import { initialDispatcher } from "@/init/initialDispatcher";
import { Catalog } from "@/modules/catalog";
import { disableSaga } from "@/utils/disableSaga";
import { getInitialReduxState } from "@/utils/getInitialReduxState";
import { GetServerSidePropsContext } from "next";
import { initializeStore } from "../store";

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

const CatalogPage = () => {
  return (
    <>
      <Catalog />
    </>
  );
};

export default CatalogPage;
