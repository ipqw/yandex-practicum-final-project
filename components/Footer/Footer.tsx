import Image from 'next/image';
import styled from 'styled-components';
import Content from '../Сontent/Content';

export default function Footer() {
  return (
    <Content>
      <FooterWrapper>
        <Link
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by our team
          <Description>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </Description>
        </Link>
      </FooterWrapper>
    </Content>
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

const Link = styled.a`
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   flex-grow: 1;
`;

const Description = styled.span`
  margin: 4rem 0;
  line-height: 1.5;
  font-size: 1.5rem;
`;
