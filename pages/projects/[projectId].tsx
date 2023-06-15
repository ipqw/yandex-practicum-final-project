import { Page } from 'components/Page';
import { ProjectCardLarge } from 'components/ProjectCardLarge';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { store } from 'store';
import { ya_data } from '../../mock/ttt.js'

const ProjectPage = observer(() => {
  const router = useRouter();
  const id = parseInt(router.query.projectId as string);
  const projects = toJS(store.projects);
  const project = projects.find(elem => elem.id == id);

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
      .catch(res => store.setMembers(store.lang == 'ru' ? ya_data.members.ru : ya_data.members.en));
  }, [store.lang]);

  useEffect(() => {
    fetch(
      'https://betterweb.akmit.ru/betterweb/api/v1/getData?' +
        new URLSearchParams({
          locale: store.lang,
          datatype: 'projects'
        })
    )
      .then(res => res.json())
      .then(data => {
        store.setProjects(data.data);
      })
      .catch(res => store.setProjects(store.lang == 'ru' ? ya_data.projects.ru : ya_data.projects.en));
  }, [store.lang]);
  return (
    <Page>
      <ProjectCardLarge project={project} />
    </Page>
  );
});
export default ProjectPage;
