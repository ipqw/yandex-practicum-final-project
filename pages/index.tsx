import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import styled from 'styled-components';

export default function Home() {
  return (
    <HomeWrapper>
      <Header />
      <Footer />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
