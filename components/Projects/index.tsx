import { Content } from 'components/Content';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { store } from '../../store';
import { ProjectCard } from '../ProjectCard';

export const Projects = observer(() => {
  useEffect(() => {
    fetch(
      'https://130.193.43.180/betterweb/api/v1/getData?' +
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

  useEffect(() => {
    fetch(
      'https://130.193.43.180/betterweb/api/v1/getData?' +
        new URLSearchParams({
          locale: store.lang,
          datatype: 'projects'
        })
    )
      .then(res => res.json())
      .then(data => {
        store.setProjects(data.data);
      })
      .catch(res => console.error(res));
  }, [store.lang]);

  return (
    <ProjectsWrapper>
      {store.projects.map((project, i) => {
        return <ProjectCard project={project} key={i} />;
      })}
    </ProjectsWrapper>
  );
});

const ProjectsWrapper = styled(Content)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 120px;
`;
