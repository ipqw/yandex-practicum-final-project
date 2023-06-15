import { projectCreatedAt } from '../../mock/mock';
import styled from 'styled-components';
import { Content } from '../Сontent';

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <DateParagraph>
          Время создания проекта <span>{projectCreatedAt}</span>
        </DateParagraph>
      </FooterContent>
    </FooterWrapper>
  );
}
const DateParagraph = styled.p`
  color: gray;
  span {
    color: #000;
  }
  @media (prefers-color-scheme: dark) {
    span {
      color: #fff;
    }
  }
`;
const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1280px;
  @media (max-width: 1280px) {
    justify-content: space-between;
    padding: 0 20px;
  }
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;
const FooterWrapper = styled.footer`
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #ebecf0;
  @media (prefers-color-scheme: dark) {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
