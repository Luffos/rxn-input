import '@fontsource/lato';
import '../styles/css/globals.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import useEffectOnce from '../hooks/useEffectOnce';

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffectOnce(() => {
    setIsLoaded(true)
  });

  if (!isLoaded) {
    return <></>;
  }

  return <Component {...pageProps} />;
}

export default MyApp;
