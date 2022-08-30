import React from 'react';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import ContextProvider from '@/contexts';
import Footer from '@/components/elements/Footer';
import Navbar from '@/components/elements/Navbar';
import client from '@/utils/apollo-client';
import '@/public/assets/css/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <ApolloProvider client={client}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ApolloProvider>
    </ContextProvider>
  );
}

export default MyApp;
