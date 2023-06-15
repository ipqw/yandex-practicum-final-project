import { Locations } from 'components/Locations';
import { Page } from 'components/Page';
import { Members } from '../components/Members';

export default function Home() {
  return (
    <Page>
      <Members />
      <Locations />
    </Page>
  );
}
