import { Content } from 'components/Content';
import { observer } from 'mobx-react';
import YandexMap from '../YandexMap'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLang } from 'store/lang';
import styled from 'styled-components';
import defaultAvatar from '../../assets/images/default-avatar.jpg';
import { store } from '../../store';
import { IMember } from '../../types';

type IProps = {
  member: IMember | undefined;
};

export const MemberCardLarge = observer((props: IProps) => {
  const router = useRouter();
  const member = props.member;
  const lang = useLang();
  let color = store.isDark ? 'white' : 'black';

  if (member === undefined) {
    return <p style={{ color: color }}>{lang.notMemberError}</p>;
  }

  return (
    <MemberCardWrapper onClick={() => router.push(`/members/${member.id}`)}>
      <MemberMedia>
        <Image src={defaultAvatar} priority alt="" height={250} style={{ zIndex: 2 }} />
        <TitleMap>{lang.meOnMap}</TitleMap>
        <MapWrapper>
          <YandexMap location={member.location} height='100%'></YandexMap>
        </MapWrapper>
      </MemberMedia>
      <MemberData>
        <MemberName>{member.name}</MemberName>
        <MemberDesc>{member.description}</MemberDesc>
        <MemberContacts>
          <Title>{lang.myContacts}</Title>
          <Link href={member.github}>Github: {member.github}</Link>
          <Link href={'https://t.me/' + member.telegram.slice(1)}>
            Telegram: {member.telegram}
          </Link>
        </MemberContacts>
        <MemberStackWrapper>
          <Title>{lang.myStack}</Title>
          <MemberStack>{member.stack.join(', ')}</MemberStack>
        </MemberStackWrapper>
      </MemberData>
    </MemberCardWrapper>
  );
});

const Title = styled.span`
  font-size: 2em;
  font-weight: 700;
  z-index: 2;
`;

const TitleMap = styled(Title)`
  margin-left: 10px;
`

const MemberCardWrapper = styled(Content)`
  height: 500px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  background-color: #f5f5f5;
  overflow: hidden;
  color: 'black';
`;

const MemberMedia = styled.div`
  position: relative;
  width: 49%;
  display: flex;
  flex-direction: column;
`;

const MapWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const MemberData = styled.div`
  width: 49%;
  height: 100%;
  padding: 1em 0;
  gap: 1em;
  display: flex;
  flex-direction: column;
`;

const MemberName = styled.span`
  font-size: 3em;
  font-weight: 700;
`;

const MemberDesc = styled.span`
  margin-top: 0.5em;
`;

const MemberContacts = styled.div`
  display: flex;
  flex-direction: column;
`;

const MemberStackWrapper = styled.div``;

const MemberStack = styled.span`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: 0.5em;
  color: #888;
`;
