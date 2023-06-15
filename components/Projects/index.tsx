import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { store } from '../../store';
import { IMember } from '../../types';
import { ProjectCard } from '../ProjectCard';

export const Projects = observer((): any => {
  const [data, setData] = useState(Array<IMember>);

  useEffect(() => {
    fetch(
      'http://130.193.43.180/betterweb/api/v1/getData?' +
        new URLSearchParams({
          locale: store.lang ? 'ru' : 'en',
          datatype: 'members'
        })
    )
      .then(res => res.json())
      .then(data => {
        store.setMembers(data.data);
      })
      .catch(res => console.error(res));
  });
  useEffect(() => {
    fetch(
      'http://130.193.43.180/betterweb/api/v1/getData?' +
        new URLSearchParams({
          locale: store.lang ? 'ru' : 'en',
          datatype: 'projects'
        })
    )
      .then(res => res.json())
      .then(data => {
        setData(data.data);
        store.setProjects(data.data);
      })
      .catch(res => console.error(res));
  }, [store.lang]);

  return (
    <ProjectsWrapper>
      {data.map(el => {
        return <ProjectCard key={el.id} project={el} />;
      })}
    </ProjectsWrapper>
  );
});
const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 120px;
`;
