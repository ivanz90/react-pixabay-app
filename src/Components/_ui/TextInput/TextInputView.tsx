import React from 'react'
import { ITextInput } from './types'
import { FieldTitle } from '../_shared-styles'
import { StyledInput } from './style'

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