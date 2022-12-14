import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ACW</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
