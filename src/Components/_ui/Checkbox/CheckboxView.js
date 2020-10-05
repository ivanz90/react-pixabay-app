import React from 'react'
import { CheckboxLabel, CheckboxContainer, CheckboxInner, CheckboxHidden, CheckboxStyled, CheckboxText } from './styles'

const CheckboxView = React.forwardRef( ({title, ...restProps}, ref) => {
  return (
      <CheckboxLabel>
          <CheckboxContainer>
              <CheckboxInner>
                  <CheckboxHidden {...restProps} ref={ref} />
                  <CheckboxStyled />
              </CheckboxInner>
          </CheckboxContainer>
          {!!title && <CheckboxText>{title}</CheckboxText>}
      </CheckboxLabel>
  )
})

export default CheckboxView