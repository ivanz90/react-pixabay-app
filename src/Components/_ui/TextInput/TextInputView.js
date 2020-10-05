import React from 'react'
import { FieldTitle } from '../_shared-styles'
import { StyledInput } from './style'

const TextInputView = React.forwardRef(({ title, ...restProps }, ref) => {
  return ( 
    <label>
      {!!title && <FieldTitle>{title}</FieldTitle>}
      <StyledInput {...restProps} ref={ref} />
    </label> 
  )
})
 
export default TextInputView