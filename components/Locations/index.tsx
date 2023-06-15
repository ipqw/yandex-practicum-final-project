import { observer } from 'mobx-react';
import { store } from 'store';
import { useLang } from 'store/lang';
import styled from 'styled-components';
import { Content } from '../Content';
import { LocationCard } from './LocationCard';

export const Locations = observer(() => {
  const lang = useLang();
  const members = store.members;
  let color = store.isDark ? 'white' : 'black';

  return (
    <LocationsContent>
      <h1 style={{ color: color }}>{lang.headingAdresses}</h1>
      <Container>
        {members.map(({ location, name }, i) => (
          <LocationCard key={i} location={location} name={name} />
        ))}
      </Container>
    </LocationsContent>
  );
});

const LocationsContent = styled(Content)`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;
