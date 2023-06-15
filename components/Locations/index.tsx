import { LocationCard } from './LocationCard';
import { Content } from '../Сontent';
import styled from 'styled-components';
import { store } from 'store';
import { observer } from 'mobx-react';
export const Locations = observer(() => {
  const members = store.members;
  return (
    <LocationsContent>
      <h1>{store.lang ? 'Адреса' : 'Addresses'}</h1>
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
