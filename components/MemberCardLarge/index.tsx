import { Content } from 'components/Content';
import { observer } from 'mobx-react';
import YandexMap from '../YandexMap';
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
    <MemberCardWrapper
      style={{
        backgroundColor: store.isDark ? 'rgb(18, 18, 18)' : '#f5f5f5',
        color: store.isDark ? 'white' : 'black'
      }}
      onClick={() => router.push(`/members/${member.id}`)}
    >
      {' '}
      <MemberMedia>
        <Image src={member.image || defaultAvatar.src} alt="" />
        <TitleMap>{lang.meOnMap}</TitleMap>
        <MapWrapper>
          <YandexMap location={member.location} height="100%"></YandexMap>
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
  font-size: calc(1.5em + 1vw);
  font-weight: 700;
  z-index: 1;
`;

const TitleMap = styled(Title)`
  padding-left: 10px;
  color: black;
  background-color: white;
  font-size: calc(20px + 0.5vw);
  width: 270px;
  @media screen and (min-width: 1380px) {
    width: 250px;
  }
`;

const MemberCardWrapper = styled(Content)`
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  background-color: #f5f5f5;
  overflow: hidden;
  flex-direction: column;
  color: 'black';
  margin-top: 120px;
  padding: 0;
  @media screen and (min-width: 1380px) {
    flex-direction: row;
    height: 500px;
    width: 95%;
    margin: 0;
  }
`;

const MemberMedia = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1380px) {
    width: 49%;
  }
`;

const MapWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const MemberData = styled.div`
  width: 95%;
  height: 100%;
  padding: 1em 0;
  gap: 1em;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  @media screen and (min-width: 1380px) {
    width: 49%;
  }
`;

const MemberName = styled.p`
  font-size: 3em;
  font-weight: 700;
  margin: 0;
`;

const MemberDesc = styled.p`
  font-size: calc(12px + 0.5vw);
  margin-top: 0.5em;
  margin: 0;
`;

const MemberContacts = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  font-size: calc(12px + 0.5vw);
`;

const MemberStackWrapper = styled.div``;

const MemberStack = styled.p`
  display: flex;
  font-size: calc(12px + 0.5vw);
  flex-direction: column;
  margin-top: auto;
  margin-bottom: 0.5em;
  color: #888;
`;
const Image = styled.img`
  margin: 0;
  z-index: 1;
  object-fit: cover;
  width: 150px;
  height: 150px;
  @media screen and (min-width: 1380px) {
    width: 250px;
    height: 250px;
  }
`;
