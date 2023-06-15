import styled from 'styled-components';

export const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  min-height:100%;
  margin-bottom:-100px;
  background-color: transparent;
  @media (max-width: 1280px) {
    padding: 0 20px;
  }
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;
