import React from 'react'
import { FieldTitle } from '../_shared-styles'
import { StyledInput } from './style'

interface ITextInput extends React.HTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  style?: any;
  onBlur?: ({target}: {target: EventTarget | null}) => void;
}

const TextInputView = React.forwardRef<HTMLInputElement, ITextInput>(({ title, ...restProps }, ref) => {
  console.log({...restProps})
  return ( 
    <label>
      {!!title && <FieldTitle>{title}</FieldTitle>}
      <StyledInput {...restProps} ref={ref} />
    </label> 
  )
})
 
export default TextInputView