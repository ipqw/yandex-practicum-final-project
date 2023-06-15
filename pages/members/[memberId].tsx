import { MemberCardLarge } from 'components/MemberCardLarge';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { store } from 'store';
import { Page } from '../../components/Page';

const MemberPage = observer(() => {
  const router = useRouter();
  const id = parseInt(router.query.memberId as string);
  const members = toJS(store.members);

  const member = members.find(elem => elem.id == id);

  useEffect(() => {
    fetch(
      'https://betterweb.akmit.ru/betterweb/api/v1/getData?' +
        new URLSearchParams({
          locale: store.lang,
          datatype: 'members'
        })
    )
      .then(res => res.json())
      .then(data => {
        store.setMembers(data.data);
      })
      .catch(res => console.error(res));
  }, [store.lang]);

  return (
    <Page>
      <MemberCardLarge member={member} />
    </Page>
  );
});

export default MemberPage;
