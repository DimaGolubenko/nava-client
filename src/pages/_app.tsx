import { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import "@/assets/styles/globals.scss";

import { useStore } from "@/store";
import MainLayout from "@/layouts/MainLayout";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const store = useStore(pageProps.initialReduxState);
  const getLayout =
    Component.getLayout ||
    (() => (
      <Provider store={store}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Provider>
    ));
  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  );
}
