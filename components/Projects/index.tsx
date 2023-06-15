import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { useState } from 'react';
import styled from 'styled-components';
import { store } from '../../store';
import { ProjectCard } from '../ProjectCard';

export const Projects = observer((): any => {
  const projects = toJS(store.projects.projects);
  let currentProjects = projects.ru;
  if (store.lang) {
    currentProjects = projects.ru;
  } else {
    currentProjects = projects.en;
  }

  return (
    <ProjectsWrapper>
      {currentProjects.map(el => {
        return <ProjectCard key={el.id} id={el.id} />;
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
