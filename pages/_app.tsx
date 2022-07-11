import '../styles/globals.css'
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client';
import client from '../src/apollo-client';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <>
      {/* <ApolloProvider client={client}> */}
        <Component {...pageProps} />
      {/* </ApolloProvider> */}
    </>
  )
}

export default MyApp
