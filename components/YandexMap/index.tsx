import { Map, Placemark } from '@pbe/react-yandex-maps';

interface IProps {
  location: [number, number];
  height: string;
}

export default function YandexMap({ location, height }: IProps) {
  return (
    <Map
      width="100%"
      height={height}
      defaultState={{ center: location, zoom: 13 }}
    >
      <Placemark defaultGeometry={location} />
    </Map>
  );
}
