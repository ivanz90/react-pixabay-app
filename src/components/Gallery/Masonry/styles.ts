import styled from 'styled-components'

// Masonry components

export const Masonry = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: stretch;
  width: 100%;
  margin: auto;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: stretch;
  flex-grow: 1;
`