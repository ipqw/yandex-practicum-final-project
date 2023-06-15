import styled from 'styled-components';
import { Content } from '../Сontent';
import { observer } from 'mobx-react';
import { MemberCard } from '../MemberCard';
import { store } from '../../store';

export const Members = observer(() => {
  let color;
  if (store.theme) {
    color = 'white';
  } else {
    color = 'black';
  }
  return (
    <Container>
      <SectionTitle style={{ color: color }}>
        {store.lang ? 'Наша команда' : 'Our team'}
      </SectionTitle>
      <MembersWrapper>
        <MemberCard id={1}></MemberCard>
        <MemberCard id={2}></MemberCard>
        <MemberCard id={3}></MemberCard>
        <MemberCard id={4}></MemberCard>
      </MembersWrapper>
    </Container>
  );
});

const Container = styled(Content)`
  width: 100vw;
`;

const MembersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SectionTitle = styled.h1`
  text-align: left;
`;
