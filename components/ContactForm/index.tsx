import { observer } from 'mobx-react';
import { FormEvent, useState } from 'react';
import { useLang } from 'store/lang';
import styled from 'styled-components';
import closeIcon from '../../assets/icons/close.svg';
import { store } from '../../store';
import { Content } from '../Content';

export const ContactForm = observer(({ close }: { close: () => void }) => {
  const lang = useLang();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isAccept, setIsAccept] = useState(false);

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    setSubmitStatus(lang.popupStatusInProgress);
    e.preventDefault();

    const data = {
      name: name,
      email: email,
      message: message,
      privacy: isAccept
    };

    fetch('https://betterweb.akmit.ru/betterweb/api/v1/write-us', {
      method: 'POST',
      body: new URLSearchParams(data as any)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Bad HTTP response: ${response.status}`);
      }
      setSubmitStatus(lang.popupStatusDone);
      setTimeout(close, 1000);
    })
    .catch(error => {
      setSubmitStatus(lang.popupStatusDone);
      console.error(`Could not send a message, error: ${error}`);
    });
  };

  const [submitStatus, setSubmitStatus] = useState(lang.popupButton);

  const FontStyle = { color: store.isDark ? 'white' : 'black' };
  const BorderStyle = {
    border: `1px solid ${store.isDark ? 'white' : 'black'}`
  };

  return (
    <Popup style={{ backgroundColor: store.isDark ? 'black' : 'white' }}>
      <CloseIconContainer>
        <Image src={closeIcon.src} onClick={close} alt="close" />
      </CloseIconContainer>
      <h1 style={FontStyle}>{lang.popupHeading}</h1>
      <form id="contact-us-form" onSubmit={submitForm}>
        <FormGrid>
          <label style={FontStyle} htmlFor="name">
            {lang.popupName}
          </label>
          <InputStyled
            style={{ ...BorderStyle, ...FontStyle }}
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
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
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <label style={{...FontStyle, width: 'min-content'}} htmlFor="message">
            {lang.popupMessage}
          </label>
          <TextAreaStyled
            style={{ ...BorderStyle, ...FontStyle }}
            rows={10}
            id="message"
            name="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
          />
          <label style={FontStyle} htmlFor="privacy">
            {lang.popupConditions}
          </label>
          <CheckBoxStyled
            type="checkbox"
            id="privacy"
            name="privacy"
            onChange={e => setIsAccept(e.target.checked)}
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

const CheckboxWrapper = styled.div`
  max-width: 30%;
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
  cursor: pointer;
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

const Image = styled.img`
  width: 50px;
  height: 50px;
  margin: 0;
  object-fit: cover;
`;
