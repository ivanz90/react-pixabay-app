import styled, { keyframes } from 'styled-components'
import { BLACK_PRIMARY, GREEN_PRIMARY } from '../../shared/style'

const spin = keyframes`
  from {
    transform: rotate(0);
  }
  to{
    transform: rotate(359deg);
  }
`

export const AppLoader = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${BLACK_PRIMARY};
`

export const SpinnerBox = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid ${GREEN_PRIMARY};
  border-top: 3px solid transparent;
  border-radius: 50%;
  animation: ${spin} .5s linear 0s infinite;
`