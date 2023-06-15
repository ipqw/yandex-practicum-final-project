import { Content } from 'components/Content';
import { observer } from 'mobx-react';
import { store } from 'store';
import image from '../../assets/images/default-image.png';
import styled from 'styled-components';
import { useLang } from 'store/lang';
import { IProject } from 'types';

interface IProps {
  project: IProject | undefined;
}

export const ProjectCardLarge = observer(({ project }: IProps) => {
  const lang = useLang();
  let date;
  if (project) {
    date = new Date(project?.createdAt);
  }

  return (
    <Wrapper
      style={{
        color: store.isDark ? 'white' : 'black',
        backgroundColor: store.isDark ? '#0D0D0D' : '#F5F5F5'
      }}
    >
      <div>
        <ProjectName>{project?.name}</ProjectName>
        <Image src={project?.image || image.src} />
      </div>
      <Desc>
        <DescH2>{lang.projectDescription}</DescH2>
        <DescText>{project?.description}</DescText>
        <DescText>
          {lang.dateCreated}
          {date ? date.toLocaleDateString() : ''}
        </DescText>
        <DescText>
          {lang.projectStack}
          {project?.stack.join(', ')}
        </DescText>
      </Desc>
    </Wrapper>
  );
});
const Wrapper = styled(Content)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 120px;
  padding: 20px;
  padding-bottom: 40px;
  border-radius: 15px;
`;
const Image = styled.img`
  padding: 0;
  width: 90%;
  display: block;
  margin: 0 auto;
  @media screen and (min-width: 1040px) {
    width: 500px;
  }
`;
const Desc = styled.div`
  width: 500px;
`;
const DescText = styled.p`
  margin-top: 20px;
  font-size: calc(8px + 1vw);
`;
const ProjectName = styled.h1`
  font-size: calc(16px + 1.5vw);
  text-align: center;
`;
const DescH2 = styled.h2`
  font-size: calc(12px + 1.5vw);
`;
