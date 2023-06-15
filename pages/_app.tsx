import { YMaps } from '@pbe/react-yandex-maps';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <YMaps>
      <Component {...pageProps} />
    </YMaps>
  );
}
