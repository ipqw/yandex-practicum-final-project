import { Content } from '../Сontent/Content';
import NavLink from '../NavLink/NavLink';
import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderWrapper>
      <ContentHeader>
        <NavLink href="/">
          <Logo>BetterWeb</Logo>
        </NavLink>
        <NavMenu>
          <NavLink active href="#" name="Главная" />
          <NavLink href="#" name="Проекты" />
          <NavLink href="#" name="О нас" />
          <NavLink href="#" name="Контакты" />
        </NavMenu>
        <Buttons>
          <FeedBackButton>Обратная связь</FeedBackButton>
          <ThemeButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
            </svg>
          </ThemeButton>
          <LangsList>
            <LangsListOptions>English</LangsListOptions>
            <LangsListOptions>Русский</LangsListOptions>
          </LangsList>
        </Buttons>
      </ContentHeader>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100px;
  backdrop-filter: blur(7px);
  background-color: rgba(255, 255, 255, 0.1);
`;

const TempLogo = styled.div``;

const ContentHeader = styled(Content)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavMenu = styled.nav`
  min-width: 30%;
  display: flex;
  justify-content: space-between;
`;

const Buttons = styled.div`
  min-width: 25%;
  display: flex;
  justify-content: space-between;
  font-family: 'OpenSansRegular';
`;

const Button = styled.button`
  height: 3em;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  transition: ease-in-out 0.3s;

  &:hover {
    background-color: #ddd;
    box-shadow: 0px 0px 2px 0px #aaa inset;
  }
`;

const FeedBackButton = styled(Button)`
  padding: 0 15px;
  border-radius: 5%;
`;

const ThemeButton = styled(Button)`
  width: 3em;
  border-radius: 50%;
`;

// 'select' tag for changing languages
const LangsList = styled.select`
  padding: 0 15px;
  border: solid 2px #eee;
  border-radius: 5%;
  outline: none;
`;

const LangsListOptions = styled.option``;
