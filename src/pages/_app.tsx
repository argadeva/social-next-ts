import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import ContextProvider from '@/contexts';
import { ApolloProvider } from '@apollo/client';
import Footer from '@/components/elements/Footer';
import Navbar from '@/components/elements/Navbar';
import apolloClient from '@/utils/apollo-client';
import '@/public/assets/css/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const client = apolloClient();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      window.gtag('config', process.env.publicGAID, {
        page_path: url,
      });
    }
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, [router.events]);

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
