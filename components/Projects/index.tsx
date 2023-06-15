import { Content } from 'components/Content';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { useLang } from 'store/lang';
import styled from 'styled-components';
import { store } from '../../store';
import { ProjectCard } from '../ProjectCard';

export const Projects = observer(() => {
  const lang = useLang();
  useEffect(() => {
    fetch(
      'https://api.stvorka34.ru/betterweb/api/v1/getData?' +
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
      'https://api.stvorka34.ru/betterweb/api/v1/getData?' +
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

  const [amount, setAmount] = useState(3);
  let displayedProjects = store.projects.slice(0, amount);

  return (
    <ProjectsWrapper>
      <ProjectsWrapperList>
        {displayedProjects.map((project, i) => {
          return <ProjectCard project={project} key={i} />;
        })}
      </ProjectsWrapperList>
      {amount < store.projects.length && (
        <ShowMoreButton
          style={{
            margin: '0 auto',
            backgroundColor: store.isDark ? '#363636' : '#ededed',
            color: store.isDark ? '#ffffff' : 'black'
          }}
          onClick={() => setAmount(amount + 3)}
        >
          {lang.showMore}
        </ShowMoreButton>
      )}
    </ProjectsWrapper>
  );
});

const ProjectsWrapper = styled(Content)``;

const ProjectsWrapperList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 670px) {
    grid-template-columns: 1fr;
  }
  grid-auto-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  --spacing: 20px;
  margin-top: calc(100px + var(--spacing));
  @media (max-width: 580px) {
    margin-top: calc(120px + var(--spacing));
  }

  @media (max-width: 375px) {
    margin-top: calc(150px + var(--spacing));
  }
`;

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
