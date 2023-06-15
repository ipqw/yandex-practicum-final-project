import { observer } from 'mobx-react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import gh from '../../assets/icons/gh.svg';
import tg from '../../assets/icons/tg.svg';
import defaultAvatar from '../../assets/images/default-avatar.jpg';
import { store } from '../../store';
import { IMember } from '../../types';

type IProps = {
  member: IMember;
};

export const MemberCard = observer((props: IProps) => {
  const member = props.member;
  let color = store.isDark ? 'white' : 'black';

  return (
    <MemberCardWrapper>
      <Image src={defaultAvatar} priority alt="" width={280} height={225} />
      <MemberData style={{ color: color }}>
        <MemberName>
          <p>{member.name}</p>
          <Link href={member.github}>
            <Image
              style={{ backgroundColor: 'white', borderRadius: '100%' }}
              src={gh}
              alt=""
              width={18}
            />
          </Link>
          {/* delete symbol '@' at start of username and create link */}
          <Link href={'https://t.me/' + member.telegram.slice(1)}>
            <Image
              style={{ backgroundColor: 'white', borderRadius: '100%' }}
              src={tg}
              alt=""
              width={18}
            />
          </Link>
        </MemberName>
        <MemberDesc>{member.description}</MemberDesc>
        <MemberStack>{member.stack.join(', ')}</MemberStack>
      </MemberData>
    </MemberCardWrapper>
  );
});

const MemberCardWrapper = styled.div`
  height: 480px;
  min-width: 280px;
  width: 280px;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  border-bottom: solid 1px #888;
  margin-bottom: 10px;
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
  padding: 0;
  margin: 0;

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
