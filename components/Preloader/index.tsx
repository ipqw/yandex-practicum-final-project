import { observer } from 'mobx-react';
import styled from 'styled-components';

type IProps = {
  isDisplay: boolean
}

export const Preloader = observer(({ isDisplay }: IProps) => {
  return (
    <>
      {isDisplay && <PreloaderWrapper>
        <div className='spinner'></div>
      </PreloaderWrapper>
      }
    </>
  );
});


const PreloaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #983000;
`