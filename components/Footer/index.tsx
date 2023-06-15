import styled from 'styled-components';
import { Content } from '../Сontent';

export default function Footer() {
  return (
    <FooterWrapper>
      <Content></Content>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
`;
