import { Content } from 'components/Content';
import { observer } from 'mobx-react';
import { useState } from 'react';
import { useLang } from 'store/lang';
import styled from 'styled-components';
import { store } from '../../store';
import { ContactForm } from '../ContactForm';

export const Footer = observer(() => {
  const lang = useLang();
  const [formState, setFormState] = useState(false);

  return (
    <>
      <FooterWrapper
        style={{
          backgroundColor: store.isDark ? 'rgba(255, 255, 255, 0.1)' : '#f5f5f5'
        }}
      >
        <FooterContent>
          <DateParagraph>
            {lang.footerCreatedTime + store.createTime}
          </DateParagraph>
          <ContactUsButton
            type="button"
            onClick={() => setFormState(!formState)}
          >
            {lang.footerContactUs}
          </ContactUsButton>
        </FooterContent>
      </FooterWrapper>
      {formState ? (
        <ContactForm
          close={() => {
            setFormState(false);
          }}
        />
      ) : (
        ''
      )}
    </>
  );
});

const DateParagraph = styled.p`
  color: gray;
  margin: 0;
  span {
    color: #000;
  }
  @media (prefers-color-scheme: dark) {
    span {
      color: #fff;
    }
  }

  @media (max-width: 410px) {
    font-size: 0.9rem;
    text-align: center;
  }
`;

const FooterContent = styled(Content)`
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: space-between;
  @media (max-width: 410px) {
    flex-direction: column;
  }
`;

const FooterWrapper = styled.footer`
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  padding: 20px 0;
  width: 100%;
  background-color: #ebecf0;
  @media (prefers-color-scheme: dark) {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const ContactUsButton = styled.button`
  background: transparent;
  border-radius: 2px;
  padding: 5px 50px;
  border: 1px solid grey;
  color: grey;
  cursor: pointer;
`;
