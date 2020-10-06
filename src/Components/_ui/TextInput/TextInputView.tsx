import React from 'react'
import { TextInputProps } from './../../../shared/interfaces'
import { FieldTitle } from '../_shared-styles'
import { StyledInput } from './style'

const TextInputView = React.forwardRef<HTMLInputElement, TextInputProps>(({ title, ...restProps }, ref) => {
  console.log({...restProps})
  return ( 
    <label>
      {!!title && <FieldTitle>{title}</FieldTitle>}
      <StyledInput {...restProps} ref={ref} />
    </label> 
  )
})
 
export default TextInputView