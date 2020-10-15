import React from 'react'
import { default as ReactSelect } from 'react-select'
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
  onChange?: (value: any) => void;
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
