import styled from 'styled-components'
import { INPUT_BORDER_DEFAULT } from '../../shared/style'

// Form layout

export const FormRow = styled.div.attrs((props: any) => ({
  display: props.display || '',
  alignItems: props.display ? 'flex-end' : ''
}))`
  display: ${(props) => props.display};
  align-items: ${(props) => props.alignItems};
  flex-wrap: wrap;
  &:not(:first-child) {
    margin-top: 20px;
  }
  label {
    margin-top: 15px;
  }
`

export const FormWrapper = styled.div<{borderColor: string}>`
  display: inline-block;
  padding: 1rem;
  border: 1px solid;
  border-color: ${props => props.borderColor || INPUT_BORDER_DEFAULT};
  border-radius: 10px;
  min-width: 375px;
`

export const TextError = styled.span`
  color: red;
  display: block;  
`

// Elements
