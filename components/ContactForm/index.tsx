import { observer } from 'mobx-react';
import Image from 'next/image';
import { FormEvent, useState } from 'react';
import styled from 'styled-components';
import closeIcon from '../../assets/icons/close.svg';
import { store } from '../../store';
import { Content } from '../Content';

export const ContactForm = observer(({ close }: { close: () => void }) => {
  function submitForm(event: FormEvent<HTMLFormElement>) {
    setSubmitStatus(store.isRu ? 'Отправляем…' : 'Sending…');
    event.preventDefault();
    fetch(event.currentTarget.action, {
      method: 'POST',
      body: new URLSearchParams(new FormData(event.currentTarget) as any)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Bad HTTP response: ${response.status}`);
        }
        setSubmitStatus(store.isRu ? 'Отправлено' : 'Sent');
        setTimeout(close, 1000);
      })
      .catch(error => {
        setSubmitStatus(
          store.isRu ? 'Ошибка. Повторить?' : 'Error. Try again?'
        );
        console.error(`Could not send a message, error: ${error}`);
      });
  }

  const [submitStatus, setSubmitStatus] = useState(
    store.isRu ? 'Отправить' : 'Send'
  );

  const FontStyle = { color: store.isDark ? 'white' : 'black' };
  const BorderStyle = {
    border: `1px solid ${store.isDark ? 'white' : 'black'}`
  };

  return (
    <Popup style={{ backgroundColor: store.isDark ? 'black' : 'white' }}>
      <CloseIconContainer>
        <Image
          priority
          width="50"
          height="50"
          src={closeIcon}
          onClick={close}
          alt="close"
        />
      </CloseIconContainer>
      <h1 style={FontStyle}>{store.isRu ? 'Написать нам' : 'Contact us'}</h1>
      <form
        id="contact-us-form"
        method="post"
        action="http://130.193.43.180/betterweb/api/v1/write-us"
        onSubmit={submitForm}
      >
        <FormGrid>
          <label style={FontStyle} htmlFor="name">
            {(store.isRu ? 'Имя' : 'Name') + ':'}
          </label>
          <InputStyled
            style={{ ...BorderStyle, ...FontStyle }}
            type="text"
            id="name"
            name="name"
            required
          />
          <label style={FontStyle} htmlFor="email">
            Email:
          </label>
          <InputStyled
            style={{ ...BorderStyle, ...FontStyle }}
            type="text"
            id="email"
            name="email"
            required
          />
          <label style={FontStyle} htmlFor="message">
            {(store.isRu ? 'Сообщение' : 'Message') + ':'}
          </label>
          <TextAreaStyled
            style={{ ...BorderStyle, ...FontStyle }}
            rows={10}
            id="message"
            name="message"
            required
          />
          <label style={FontStyle} htmlFor="privacy">
            {(store.isRu ? 'Я принял(а) условия' : 'I accept the conditions') +
              ':'}
          </label>
          <CheckBoxStyled
            type="checkbox"
            id="privacy"
            name="privacy"
            required
            style={{ accentColor: store.isDark ? 'white' : 'black' }}
          />
          <SubmitButton
            style={{ ...FontStyle, ...BorderStyle }}
            type="submit"
            value={submitStatus}
          />
        </FormGrid>
      </form>
    </Popup>
  );
});

const FormGrid = styled.div`
  margin-top: 2em;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
`;

const InputStyled = styled.input`
  background-color: transparent;
  border-radius: 2px;
  height: 1.75em;
  font-size: inherit;
  font-family: inherit;
  outline: none;
`;

const TextAreaStyled = styled.textarea`
  background-color: transparent;
  font-family: inherit;
  border-radius: 2px;
  resize: none;
  height: auto;
  font-size: inherit;
  font-family: inherit;
  outline: none;
`;

const CheckBoxStyled = styled(InputStyled)`
  width: 1.5em;
  height: 100%;
  margin-left: auto;
  background: transparent;
  background-color: transparent;
`;

const SubmitButton = styled.input`
  background: transparent;
  border-radius: 2px;
  padding: 10px 30px;
  grid-column: 2;
  margin-left: auto;
  margin-top: 0.5rem;
  // height: 3em;
  font-size: inherit;
  font-family: inherit;
`;

const Popup = styled(Content)`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100vw;
  max-width: none;
  z-index: 5;
  @media (min-width: 720px) {
    padding-left: 10%;
    padding-right: 10%;
  }
`;

const CloseIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2em;
`;
