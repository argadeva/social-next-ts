import React from 'react';
import type { AppProps } from 'next/app';
import Navbar from '@elements/Navbar';
import Footer from '@elements/Footer';
import ContextProvider from '../contexts';
import '../../public/assets/css/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ContextProvider>
  );
}

export default MyApp;
