import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import styled from 'styled-components';

export default function Home() {
  return (
    <HomeWrapper>
      <Header></Header>
      <div>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          cupiditate pariatur sint minus iste vero. Odio quod ipsum consequuntur
          ad soluta esse quas nesciunt eveniet iure voluptatem voluptatum in
          commodi autem, quos laudantium! Voluptatibus, minus corrupti
          perspiciatis magni minima animi facilis facere est, ratione aliquam
          ex, magnam molestiae reprehenderit? Velit.
        </span>
      </div>
      <Footer></Footer>
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
