import Link from 'next/link';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { store } from '../../store';

const LinkStyled = styled.a<{ active?: boolean }>`
  text-decoration: ${props => (props.active ? 'underline' : 'none')};
`;

const NavLink = observer((props: { href: string; name: string; active?: boolean }) => {
  let color
  if(store.theme){
    color = 'white'
  }
  else{
    color = 'black'
  }
  return (
    <Link href={props.href} passHref legacyBehavior>
      <LinkStyled style={{color: color}} className="mx-2" active={props.active}>
        {props.name}
      </LinkStyled>
    </Link>
  );
})

export default NavLink;
