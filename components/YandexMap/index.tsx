import { Map, Placemark } from '@pbe/react-yandex-maps';

interface IProps {
  location: [number, number];
}

export default function YandexMap({ location }: IProps) {
  return (
    <Map
      width="100%"
      height="200px"
      defaultState={{ center: location, zoom: 13 }}
    >
      <Placemark defaultGeometry={location} />
    </Map>
  );
}
