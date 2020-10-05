import React from 'react'
import { default as ReactSelect } from 'react-select'
import { customStyles } from './styles'
import { FieldTitle } from '../_shared-styles'

const Select = ({title, ...restProps}) => {
    return (
      <label>
        {!!title && <FieldTitle>{title}</FieldTitle>}
        <ReactSelect isSearchable={false} styles={customStyles} {...restProps} />
      </label>
    )
}

export default  Select
