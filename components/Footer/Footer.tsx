import { projectCreatedAt } from '../../mock/mock';
import styled from 'styled-components';
import { Content } from '../Сontent/Content';

export default function Footer() {
  return (
    <FooterWrapper>
      <DateParagraph>Время создания проекта <span>{projectCreatedAt}</span></DateParagraph>
    </FooterWrapper>
  );
}
const DateParagraph = styled.span`
  color: gray;
  span {
    color: #fff;
  }
`
const FooterWrapper = styled.footer`
  display: flex;
  flex: 1;
  min-height:100px;
  padding: 20px 40px;
  width:100%;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  background-color:rgba(255, 255, 255, 0.1);
  justify-content: flex-start;
  align-items: center;
`;
