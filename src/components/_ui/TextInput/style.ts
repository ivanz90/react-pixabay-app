import styled from 'styled-components'
import { ITextInput } from './types'
import { INPUT_BORDER_DEFAULT, TEXT_COLOR, INPUT_BORDER_FOCUS } from '../../../shared/style'

export const StyledInput = styled.input<ITextInput>`
  font-size: 16px;
  display: block;
  padding: 10px 20px;
  background: none;
  background-image: none;
  height: 38px;
  border: 1px solid ${INPUT_BORDER_DEFAULT};
  border-radius: 5px;
  color: ${TEXT_COLOR};
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
  &:focus {
    outline: 0;
    border-color: ${INPUT_BORDER_FOCUS};
  }
`
