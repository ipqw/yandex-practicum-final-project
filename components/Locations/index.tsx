import LocationCard from './LocationCard';
import { members } from '../../mock/mock';
import { Content } from '../Сontent';
import styled from 'styled-components';
export default function Locations() {
  return (
    <LocationsContent>
      <h1>Адреса</h1>
      <Container>
        {members.ru.map(({ location, name }, i) => (
          <LocationCard key={i} location={location} name={name} />
        ))}
      </Container>
    </LocationsContent>
  );
}
const LocationsContent = styled(Content)`
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;
