import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import defaultAvatar from '../../assets/images/default-avatar.jpg';
import gh from '../../assets/icons/gh.svg';
import tg from '../../assets/icons/tg.svg';
import { membersRu } from '../../mock/mock';

type IProps = {
  id: number;
};

export default function MemberCard(props: IProps) {
  const member = membersRu[props.id - 1];
  let stack = '';
  for (let index = 0; index < member.stack.length; index++) {
    stack += member.stack[index];
    if (index != member.stack.length - 1) stack += ', ';
  }

  return (
    <MemberCardWrapper>
      <Image src={defaultAvatar} alt="" width={300} height={225} />
      <MemberData>
        <MemberName>
          <span>{member.name}</span>
          <Link href={member.github}>
            <Image src={gh} alt="" width={18} />
          </Link>
          {/* delete symbol '@' at start of username and create link */}
          <Link href={'https://t.me/' + member.telegram.slice(1)}>
            <Image src={tg} alt="" width={18} />
          </Link>
        </MemberName>
        <MemberDesc>{member.description}</MemberDesc>
        <MemberStack>{stack}</MemberStack>
      </MemberData>
    </MemberCardWrapper>
  );
}

const MemberCardWrapper = styled.div`
  height: 480px;
  width: 280px;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  border-bottom: solid 1px #888;
`;

const MemberData = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(480px - 225px);
`;

const MemberName = styled.div`
  height: 3em;
  display: flex;
  align-items: center;
  font-size: 1.2em;
  font-weight: 700;

  a {
    height: 18px;
    padding-left: 7px;
  }
`;

const MemberDesc = styled.span`
  margin-top: 0.5em;
`;

const MemberStack = styled.span`
  margin-top: auto;
  margin-bottom: 0.5em;
  color: #888;
`;
