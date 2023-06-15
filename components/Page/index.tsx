import { observer } from 'mobx-react';
import Head from 'next/head';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { store } from '../../store';
import { Footer } from '../Footer';
import { Header } from '../Header';

type IProps = {
  children: ReactNode;
};

export const Page = observer((props: IProps) => {
  return (
    <PageWrapper style={{ backgroundColor: store.isDark ? 'black' : 'white' }}>
      <Head>
        <title>BetterWeb</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Container>{props.children}</Container>
      <Footer />
    </PageWrapper>
  );
});

const PageWrapper = styled.div`
  min-width: 100%;
`;

// height is (page`s height - footer`s height)
const Container = styled.main`
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
`;
