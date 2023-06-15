import { observer } from 'mobx-react';
import Link from 'next/link';
import { useLang } from 'store/lang';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import sun from '../../assets/icons/sun.svg';
import { store } from '../../store';
import { Content } from '../Content';
import NavLink from '../NavLink';

const closeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);
const burgerIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export const Header = observer(() => {
  const lang = useLang();
  const color = store.isDark ? 'white' : 'black';
  const [matchesMobile, setMatchesMobile] = useState(false);
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  useEffect(() => {
    setMatchesMobile(window.matchMedia('(max-width: 580px)').matches);
    window.matchMedia('(max-width: 580px)').addEventListener('change', e => {
      setMatchesMobile(e.matches);
    });
  }, []);
  const clickableContent = (
    <>
      <NavMenu>
        <NavLink href="/" name={lang.navLinkMain} />
        <NavLink href="/projects" name={lang.navLinkProjects} />
      </NavMenu>
      <Buttons>
        <ThemeButton className="clickable" onClick={store.changeTheme}>
          <Image src={sun.src} alt="" width={18} />
        </ThemeButton>
        <LangsWrapper>
          <Langs
            style={{ color: color }}
            className="clickable"
            onClick={store.changeLang}
          >
            {store.lang.toUpperCase()}
          </Langs>
        </LangsWrapper>
      </Buttons>
    </>
  );
  return (
    <HeaderWrapper
      style={{
        backgroundColor: store.isDark ? 'rgba(255, 255, 255, 0.1)' : '#f5f5f5'
      }}
    >
      <ContentHeader>
        <Link href="/">
          <Logo style={{ color: color }}>BetterWeb</Logo>
        </Link>
        {matchesMobile ? (
          <>
            <MenuIcon
              onClick={() => {
                setMobileMenuOpened(!mobileMenuOpened);
                document.body.classList.toggle('no-scroll');
              }}
            >
              {mobileMenuOpened ? closeIcon : burgerIcon}
            </MenuIcon>
            <ClickableContent opened={mobileMenuOpened}>
              {clickableContent}
            </ClickableContent>
          </>
        ) : (
          clickableContent
        )}
      </ContentHeader>
    </HeaderWrapper>
  );
});

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100px;
  z-index: 2;
  backdrop-filter: blur(7px);
  background-color: rgba(255, 255, 255, 0.1);
`;

const ContentHeader = styled(Content)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 580px) {
    padding: 20px;
  }
`;

const NavMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  @media (max-width: 580px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`;

const ThemeButton = styled.button`
  width: 3em;
  height: 3em;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  transition: ease-in-out 0.3s;
  border-radius: 50%;

  &:hover {
    background-color: #ddd;
    box-shadow: 0px 0px 2px 0px #aaa inset;
  }
`;

const Langs = styled.p`
  @media (max-width: 580px) {
    margin: 0;
  }
`;

const LangsWrapper = styled.div`
  width: 30px;
`;

const Logo = styled.p`
  font-family: Montserrat, OpenSans, sans-serif;
  font-weight: 700;
  font-size: 1.75rem;

  @media (max-width: 580px) {
    margin: 0;
  }
`;

interface mobileMenuProps {
  opened: boolean;
}

const ClickableContent = styled.div<mobileMenuProps>`
  display: flex;
  align-items: center;
  background-color: rgba(26, 26, 26, 1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  transform: ${props => (props.opened ? 'none' : 'translateX(-100vw)')};
  transition: transform 0.3s ea;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  will-change: transform, opacity;
  transition: transform 0.4s cubic-bezier(0, 0, 0.3, 1);
  z-index: 5;
  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

const MenuIcon = styled.div`
  width: 35px;
  height: 35px;
  cursor: pointer;
  z-index: 6;
  & svg {
    color: #fff;
    @media (prefers-color-scheme: dark) {
      color: #fff;
    }
    width: 100%;
    height: 100%;
  }
`;
const Image = styled.img`
  margin: 0;
  object-fit: cover;
  color: #fff;
  @media (prefers-color-scheme: dark) {
    color: #fff;
  }
`;
