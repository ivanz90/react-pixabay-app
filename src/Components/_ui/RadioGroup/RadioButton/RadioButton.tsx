import React from 'react'
import { RadioName, RadioInput } from './styles'

type radio = {
  value: string
  label: string
}

const RadioButton = React.forwardRef<HTMLInputElement, radio>((props, ref) => {
  return (
    <>
      <RadioInput ref={ref} {...props} />
      <RadioName>{props.label}</RadioName>
    </>
  )
})

export default React.memo(RadioButton)
