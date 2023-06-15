import { YMaps } from '@pbe/react-yandex-maps';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <YMaps>
      <Component {...pageProps} />
    </YMaps>
  );
}
