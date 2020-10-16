import React from 'react'
import { default as ReactSelect, ValueType, OptionsType, OptionTypeBase } from 'react-select'
import { customStyles } from './styles'
import { FieldTitle } from '../_shared-styles'

type SelectOption = {
  id?: number
  value: string
  label: string
}

interface ISelect {
  title?: string;
  options: SelectOption[] | undefined;
  defaultValue: SelectOption;
  onBlur?: () => void;
  onChange?: (value: ValueType<OptionTypeBase> | {value: string}) => void;
}

const Select: React.FC<ISelect> = ({ title, options, defaultValue, ...restProps }) => {
  return (
    <label>
      {!!title && <FieldTitle>{title}</FieldTitle>}
      <ReactSelect
        isSearchable={false}
        styles={customStyles}
        options={options}
        defaultValue={defaultValue}
        {...restProps}
      />
    </label>
  )
}

export default Select
