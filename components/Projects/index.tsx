import { Content } from 'components/Content';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { store } from '../../store';
import { ProjectCard } from '../ProjectCard';

export const Projects = observer(() => {
  useEffect(() => {
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
      })
      .catch(res => console.error(res));
  });

  useEffect(() => {
    fetch(
      'http://130.193.43.180/betterweb/api/v1/getData?' +
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
  });

  const [amount, setAmount] = useState(3);
  let displayedProjects = store.projects.slice(0, amount);

  return (
    <ProjectsWrapper>
      <ProjectsWrapperList>
        {displayedProjects.map((project, i) => {
          return <ProjectCard project={project} key={i} />;
        })}
      </ProjectsWrapperList>
      {amount < store.projects.length &&
        <ShowMoreButton onClick={() => setAmount(amount + 3)}>показать еще</ShowMoreButton>
      }
    </ProjectsWrapper>
  );
});

const ProjectsWrapper = styled(Content)`
  margin: 120px 0 30px 0;
`;

const ProjectsWrapperList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const ShowMoreButton = styled.button`
  width: 150px;
  height: 3em;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: ease-in-out 0.3s;

  &:hover {
    background-color: #ddd;
    box-shadow: 0px 0px 2px 0px #aaa inset;
  }
`;
