// import Head from 'next/head';
import { ReactNode } from 'react';
import styled from 'styled-components';
import Footer from '../Footer';
import { Header } from '../Header';

type IProps = {
  children: ReactNode;
};

export default function Page(props: IProps) {
  return (
    // <Head></Head>
    <PageWrapper>
      <Header /> 
      <Container>{props.children}</Container>
      <Footer />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  min-width: 100%;
`;

// height is (page`s height - footer`s height)
const Container = styled.main`
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
