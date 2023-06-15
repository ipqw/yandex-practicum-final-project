import MemberCard from '../MemberCard';
import styled from 'styled-components';
import { Content } from '../Сontent';

export default function Members() {
  return (
    <Container>
      <SectionTitle>Наша команда</SectionTitle>
      <MembersWrapper>
        <MemberCard id={1}></MemberCard>
        <MemberCard id={2}></MemberCard>
        <MemberCard id={3}></MemberCard>
        <MemberCard id={4}></MemberCard>
      </MembersWrapper>
    </Container>
  );
}

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
