import styled from 'styled-components';
import { Members } from '../components/Members';
import { Page } from '../components/Page';
import Head from 'next/head';

export default function Home() {
  return (
    <Page>
      <Head>
        <title>BetterWeb</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Members />
    </Page>
  );
}
