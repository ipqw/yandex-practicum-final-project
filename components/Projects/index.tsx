import { Content } from 'components/Content';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { useLang } from 'store/lang';
import styled from 'styled-components';
import { IProject } from 'types';
import { store } from '../../store';
import { ProjectCard } from '../ProjectCard';

export const Projects = observer(() => {
  const lang = useLang();
  let categories = store.getProjectCategories();
  const [amount, setAmount] = useState(3);
  const [stack, setStack] = useState(-1);
  const [displayedProjects, setDisplayedProjects] = useState(Array<IProject>);

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
      .catch(res => console.error(res));
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
        categories = store.getProjectCategories();
        setDisplayedProjects(store.projects.slice(0, amount));
      })
      .catch(res => console.error(res));
  }, [store.lang]);

  return (
    <ProjectsWrapper>
      <RadioButtons>
        <RadioButton>
          <input type="radio" name="radio"
            value='all'
            checked={stack === -1}
            onChange={() => {
              setStack(-1);
              setDisplayedProjects(store.projects.slice(0, amount));
            }} />
          <span style={{color: store.isDark ? '#ffffff' : 'black'}}>{lang.allCategories}</span>
        </RadioButton>
        {categories.map((category, i) => {
          return (
            <RadioButton key={i}>
              <input type="radio" name="radio" 
                value={category.join(', ')}
                checked={i === stack}
                onChange={() => {
                  setStack(i);
                  setDisplayedProjects(
                    store.projects.filter(project => 
                      JSON.stringify(project.stack) === JSON.stringify(categories[i])
                    ));
                }} />
              <span style={{color: store.isDark ? '#ffffff' : 'black'}}>{category.join(', ')}</span>
            </RadioButton>
          )
        })}
      </RadioButtons>
      <ProjectsWrapperList>
        {displayedProjects.map((project, i) => {
          return <ProjectCard project={project} key={i} />;
        })}
      </ProjectsWrapperList>
      {
      (
        (amount < store.projects.filter(project => 
        JSON.stringify(project.stack) === JSON.stringify(categories[stack])).length) || 
        (stack == -1 && amount-3 < store.projects.length)
      ) && (
        <ShowMoreButton
          style={{
            margin: '0 auto',
            backgroundColor: store.isDark ? '#363636' : '#ededed',
            color: store.isDark ? '#ffffff' : 'black'
          }}
          onClick={() => {
            setAmount(amount + 3);
            setDisplayedProjects(store.projects.slice(0, amount));
          }}
        >
          {lang.showMore}
        </ShowMoreButton>
      )}
    </ProjectsWrapper>
  );
});

const ProjectsWrapper = styled(Content)`
  --spacing: 20px;
  margin-top: calc(100px + var(--spacing));
  @media (max-width: 580px) {
    margin-top: calc(120px + var(--spacing));
  }

  @media (max-width: 375px) {
    margin-top: calc(150px + var(--spacing));
  }
`;

const RadioButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 50px;
`

const RadioButton = styled.div`
  display: flex;
`

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
