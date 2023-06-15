import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { useLang } from 'store/lang';
import styled from 'styled-components';
import { store } from '../../store';
import { Content } from '../Content';
import { MemberCard } from '../MemberCard';

export const Members = observer(() => {
  const lang = useLang();

  useEffect(() => {
    fetch(
      'https://130.193.43.180/betterweb/api/v1/getData?' +
        new URLSearchParams({
          locale: store.lang,
          datatype: 'members'
        })
    )
      .then(res => res.json())
      .then(data => {
        store.setMembers(data.data);
      })
      .catch(res => console.error(res));
  }, [store.lang]);

  const color = store.isDark ? 'white' : 'black';
  return (
    <MembersWrapper>
      <SectionTitle style={{ color: color }}>
        {lang.headingOurTeam}
      </SectionTitle>
      <MembersList>
        {store.members.map((member, i) => (
          <MemberCard member={member} key={i} />
        ))}
      </MembersList>
    </MembersWrapper>
  );
});

const MembersWrapper = styled(Content)`
  @media (max-width: 1280px) {
    max-width: 100%;
  }
`;

const MembersList = styled.div`
  display: flex;
  justify-content: space-between;
  overflow-x: scroll;
  gap: 30px;

  &::-webkit-scrollbar {
    height: 5px;
    background-color: #eee;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #777;
  }

  @media screen and (min-width: 1280px) {
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }
`;

const SectionTitle = styled.h1`
  text-align: left;
  margin-top: 120px;
`;
