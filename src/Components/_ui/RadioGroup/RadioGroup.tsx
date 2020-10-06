import React from 'react'
import RadioButton from './RadioButton'
import { RadioItem } from './style'
import { FieldTitle } from '../_shared-styles'

type option = {
  id: number
  value: string
  label: string
}

interface IRadioGroup {
  options: option[];
  title: string;
  register?: any;
}

const RadioGroup: React.FC<IRadioGroup> = ({ options, title, register, ...otherProps }) => {
  return (
    <>
      {!!title && <FieldTitle>{title}</FieldTitle>}
      {!!options.length &&
        options.map((option) => {
          return (
            <RadioItem key={option.id}>
              <RadioButton key={option.id} {...otherProps} value={option.value} label={option.label} ref={register} />
            </RadioItem>
          )
        })}
    </>
  )
}

export default React.memo(RadioGroup, (prevProps, nextProps) => {
  if (prevProps.register === nextProps.register) return false
  return true
})
