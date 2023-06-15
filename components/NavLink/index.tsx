import Link from 'next/link';
import styled from 'styled-components';

const LinkStyled = styled.a<{ active?: boolean }>`
  text-decoration: ${props => (props.active ? 'underline' : 'none')};
`;

function NavLink(props: { href: string; name: string; active?: boolean }) {
  return (
    <Link href={props.href} passHref legacyBehavior>
      <LinkStyled active={props.active}>{props.name}</LinkStyled>
    </Link>
  );
}

export default NavLink;
