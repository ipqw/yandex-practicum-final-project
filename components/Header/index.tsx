import { observer } from 'mobx-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLang } from 'store/lang';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import sun from '../../assets/icons/sun.svg';
import { store } from '../../store';
import { Content } from '../Content';
import NavLink from '../NavLink';

export const Header = observer(() => {
  const lang = useLang();
  const color = store.isDark ? 'white' : 'black';
  const [matchesMobile, setMatchesMobile] = useState(false);

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
          <Image src={sun} alt="" width={18} />
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
          <ClickableContent>{clickableContent}</ClickableContent>
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
  @media (max-width: 580px) {
    height: 120px;
  }

  @media (max-width: 375px) {
    height: 150px;
  }
`;

const ContentHeader = styled(Content)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 580px) {
    flex-direction: column;
    padding: 20px;
    gap: 15px;
  }
`;

const NavMenu = styled.nav`
  display: flex;
  justify-content: space-between;
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
const ClickableContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media (max-width: 375px) {
    flex-direction: column;
  }
`;
