import React from 'react'
import { RadioName, RadioInput } from './styles'

const RadioButton = React.forwardRef((props, ref) => {
  return (
    <>
      <RadioInput ref={ref} {...props} />
      <RadioName>{props.label}</RadioName>
    </>
  )
})

export default React.memo(RadioButton)
