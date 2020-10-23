import React from 'react'
import { default as ReactSelect, ValueType, OptionTypeBase } from 'react-select'
import { customStyles } from './styles'
import { FieldTitle } from '../_shared-styles'

type SelectOption = {
  id?: number
  value: string
  label: string
}

interface ISelect {
  title?: string;
  options?: SelectOption[];
  defaultValue?: SelectOption;
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
        value={defaultValue}
        
        {...restProps}
        defaultValue={defaultValue ? defaultValue : options?.length ? options[0] : null} 
      />
    </label>
  )
}

export default Select
