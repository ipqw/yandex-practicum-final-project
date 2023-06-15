import YandexMap from 'components/YandexMap';
import styled from 'styled-components';
interface IProps {
  location: [number, number];
  name: string;
}
export default function LocationCard({ location, name }: IProps) {
  return (
    <Card>
      <TextContent>
        <p>{name}</p>
      </TextContent>
      <YandexMap location={location} />
    </Card>
  );
}
const Card = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  border: 1px solid rgba(255, 255, 255, 0.2);
  flex-basis: calc(33.3% - 10px);
  @media (max-width: 1100px) {
    flex-basis: calc(50% - 8px);
  }
  @media (max-width: 650px) {
    flex-basis: 100%;
  }
`;
const TextContent = styled.div`
  padding: 10px 15px;
`;
