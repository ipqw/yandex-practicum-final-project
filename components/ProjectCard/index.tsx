import { observer } from 'mobx-react';
import styled from 'styled-components';
import { IProject } from 'types';
import image from '../../assets/images/default-image.png';
import { store } from '../../store';

type IProps = {
  project: IProject;
};

export const ProjectCard = observer(({ project }: IProps) => {
  const color = store.isDark ? 'white' : 'black';
  const backColor = store.isDark ? '#0d0d0d' : '#f5f5f5';

  return (
    <ProjectWrapper style={{ backgroundColor: backColor }}>
      <Image src={image.src} alt="project image" />
      <ProjectDiv>
        <ProjectDate>
          {/* {project?.createdAt.toLocaleDateString('en-US')} */}
        </ProjectDate>
        <ProjectName style={{ color: color }}>{project?.name}</ProjectName>
        <ProjectAuthors style={{ color: color }}>
          {/* {authors.map((elem: any) => elem.name).join(', ')} */}
        </ProjectAuthors>
        <ProjectDescription style={{ color: color }}>
          {project?.description}
        </ProjectDescription>
        <ProjectStack>{project?.stack.join(', ')}</ProjectStack>
      </ProjectDiv>
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

const ProjectDiv = styled.div`
  margin: 15px;
`;

const ProjectWrapper = styled.div`
  height: 712px;
  width: 414px;
  margin: 0;

  margin-bottom: 30px;
  border-radius: 10px;
  overflow: hidden;
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
