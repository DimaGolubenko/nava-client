import { initialDispatcher } from "@/init/initialDispatcher";
import { serverDispatch } from "@/init/serverDispatch";
import { Catalog } from "@/modules/catalog";
import {
  fetchProductsAsync,
  selectProductList,
} from "@/modules/catalog/store/productsSlice";
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

  await serverDispatch(store, (dispatch) => {
    dispatch(fetchProductsAsync());
  });

  await disableSaga(store);

  const state = store.getState();

  const currentPageReduxState = {
    products: {
      ...state.products,
      list: selectProductList(state),
    },
  };

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
