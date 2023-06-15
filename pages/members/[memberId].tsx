import { MemberCard } from 'components/MemberCard';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { store } from 'store';
import { useLang } from 'store/lang';
import { IMember } from 'types';
import { Page } from '../../components/Page';

export default function MemberPage() {
  const router = useRouter();
  const lang = useLang();
  const memberId = parseInt(router.query.memberId as string);
  const [member, setMember] = useState<undefined | IMember>(undefined);

  useEffect(() => {
    console.log(lang);
    if (!memberId) {
      return;
    }
    fetch(
      'http://130.193.43.180/betterweb/api/v1/getData?' +
        new URLSearchParams({
          locale: store.lang,
          datatype: 'members'
        })
    )
      .then(res => res.json())
      .then(data => {
        store.setMembers(data.data);
        setMember(store.getMemberById(memberId));
      })
      .catch(res => console.error(res));
  }, [store.lang, memberId, member]);

  return (
    <Page>
      {member === undefined ? (
        <p style={{ color: store.isDark ? 'white' : 'black' }}>
          {lang.notMemberError}
        </p>
      ) : (
        <MemberCard member={member} />
      )}
    </Page>
  );
}
