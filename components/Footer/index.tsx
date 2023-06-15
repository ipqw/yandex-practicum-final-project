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
        <FooterContent className="px-5">
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
`;

const FooterWrapper = styled.footer`
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
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
`;
