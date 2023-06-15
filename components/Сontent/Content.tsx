import styled from 'styled-components';

// add type to props
export default function Content(props: any) {
  return <ContentWrapper>{props.children}</ContentWrapper>;
}

const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  background-color: transparent;
  @media (max-width: 1280px) {
    padding: 0 20px;
  }
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;
