import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { store } from '../../store';
import styled from 'styled-components';
import image from '../../assets/images/default-image.png';

interface IProps {
  id: number;
}

export const ProjectCard = observer((props: IProps) => {
  let color;
  if (store.theme) {
    color = 'white';
  } else {
    color = 'black';
  }
  const projects = toJS(store.projects.projects);
  const members = toJS(store.members.members);
  let currentProjects = projects.ru;
  let currentMembers = members.ru;
  if (store.lang) {
    currentProjects = projects.ru;
    currentMembers = members.ru;
  } else {
    currentProjects = projects.en;
    currentMembers = members.en;
  }

  const getProjectById = (id: any) => {
    return currentProjects.find(el => el.id == id);
  };

  const getAuthorsById = (id: any) => {
    return currentMembers.find(el => el.id == id);
  };
  const project = getProjectById(props.id);
  const authors: any = [];
  project?.authors.map(elem => {
    authors.push(getAuthorsById(elem));
  });

  return (
    <ProjectWrapper>
      <Image src={image.src} />
      <div>
        <ProjectDate>
          {project?.createdAt.toLocaleDateString('en-US')}
        </ProjectDate>
        <ProjectName style={{ color: color }}>{project?.name}</ProjectName>
        <ProjectAuthors style={{ color: color }}>
          {authors.map((elem: any) => elem.name).join(', ')}
        </ProjectAuthors>
        <ProjectDescription style={{ color: color }}>
          {project?.description}
        </ProjectDescription>
        <ProjectStack>{project?.stack.join(', ')}</ProjectStack>
      </div>
    </ProjectWrapper>
  );
});
const ProjectDate = styled.p`
  font-size: 14px;
  opacity: 0;
  color: grey;
  margin: 0;
  margin-top: 25px;
  margin-bottom: 19px;
`;
const ProjectWrapper = styled.div`
  height: 712px;
  width: 414px;
  margin: 0;
`;
const ProjectName = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 20px;
`;
const ProjectDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  margin-top: 25px;
  margin-bottom: 27px;
`;
const ProjectAuthors = styled.p`
  font-size: 20px;
  margin: 0;
`;
const ProjectStack = styled.p`
  opacity: 0.7;
  font-size: 14px;
  color: grey;
  margin: 0;
`;
const Image = styled.img`
  width: 414px;
  margin: 0;
`;
