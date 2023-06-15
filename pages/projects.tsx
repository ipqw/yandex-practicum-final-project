import { Page } from '../components/Page';
import { Projects } from '../components/Projects';
import Head from 'next/head';

export default function ProjectPage() {
  return (
    <Page>
      <Head>
        <title>BetterWeb</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Projects />
    </Page>
  );
}
