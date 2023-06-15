import { observer } from 'mobx-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { store } from '../../store';

const LinkStyled = styled.a<{ active?: boolean }>`
  text-decoration: ${props => (props.active ? 'underline' : 'none')};
  @media (max-width: 580px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const NavLink = observer((props: { href: string; name: string }) => {
  const router = useRouter();
  let color = store.isDark ? 'white' : 'black';

  return (
    <Link href={props.href} passHref legacyBehavior>
      <LinkStyled
        style={{ color: color }}
        className="mx-2"
        active={router.asPath === props.href}
      >
        {props.name}
      </LinkStyled>
    </Link>
  );
});

export default NavLink;
