// import Head from 'next/head';
import { Children, ReactNode } from 'react';
import styled from 'styled-components';
import { Footer } from '../Footer';
import { observer } from 'mobx-react';
import { Header } from '../Header';
import { store } from '../../store';

type IProps = {
  children: ReactNode;
};

export const Page = observer((props: IProps) => {
  return (
    // <Head></Head>
    <PageWrapper style={{ backgroundColor: store.theme ? 'black' : 'white' }}>
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
