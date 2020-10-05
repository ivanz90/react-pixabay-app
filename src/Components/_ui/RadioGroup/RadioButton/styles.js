import styled from 'styled-components'
import { TEXT_COLOR, GREEN_SECONDARY, GREEN_PRIMARY } from '../../../../shared/style'

export const RadioInput = styled.input.attrs({ type: 'radio' })`
  opacity: 0;
  visibility: hidden;
  z-index: 2;
  position: absolute;
  width: 0;
  height: 0;
  margin: 0;
  cursor: pointer;
  &:checked ~ div {
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    transition: width 0.2s ease-out, height 0.2s ease-out;
  }
`
export const RadioName = styled.span`
    color: ${TEXT_COLOR};
    transition: color .3s;
    &:hover {
      color: ${GREEN_SECONDARY}
    }
    input:checked +& {
      color: ${GREEN_PRIMARY}
    }
`
