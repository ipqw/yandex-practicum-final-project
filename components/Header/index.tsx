import { Content } from '../Сontent';
import Image from 'next/image';
import sun from '../../assets/icons/sun.svg';
import NavLink from '../NavLink';
import Link from 'next/link';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { store } from '../../store';

export const Header = observer(() => {
  return (
    <HeaderWrapper>
      <ContentHeader>
        <Link href="#">
          <Logo>BetterWeb</Logo>
        </Link>
        <NavMenu>
          <NavLink active href="#" name={store.lang ? 'Главная' : 'Main'} />
          <NavLink href="#" name={store.lang ? 'Проекты' : 'Projects'} />
          <NavLink href="#" name={store.lang ? 'О нас' : 'About us'} />
          <NavLink href="#" name={store.lang ? 'Контакты' : 'Contacts'} />
        </NavMenu>
        <Buttons>
          <ThemeButton>
            <Image src={sun} alt="" width={18} />
          </ThemeButton>
          <Langs className='clickable' onClick={store.changeLang}>{store.lang ? 'RU' : 'EN'}</Langs>
        </Buttons>
      </ContentHeader>
    </HeaderWrapper>
  );
})

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100px;
  backdrop-filter: blur(7px);
  background-color: rgba(255, 255, 255, 0.1);
`;

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
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  width: 3em;
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

const ThemeButton = styled(Button)`
  border-radius: 50%;
  margin-right: 1em;
`;

const Langs = styled.p``;

const Logo = styled.p`
  font-family: Montserrat, OpenSans, sans-serif;
  font-weight: 700;
  font-size: 1.75rem;
`;
