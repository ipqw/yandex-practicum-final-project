import YandexMap from 'components/YandexMap';
import { observer } from 'mobx-react';
import { store } from 'store';
import styled from 'styled-components';
interface IProps {
  location: [number, number];
  name: string;
}
export const LocationCard = observer(({ location, name }: IProps) => {
  const color = store.theme ? 'white' : 'black';
  const backColor = store.theme ? '' : '#f5f5f5';
  return (
    <Card style={{ color: color, backgroundColor: backColor }}>
      <TextContent>
        <p>{name}</p>
      </TextContent>
      <YandexMap location={location} />
    </Card>
  );
});
const Card = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
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
