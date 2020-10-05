import { INPUT_BORDER_DEFAULT, INPUT_BORDER_FOCUS, TEXT_COLOR, BLACK_PRIMARY } from '../../../shared/style'

export const customStyles = {
  container: (provided) => ({
      ...provided,
      width: '237px'
  }),
  control: (provided, state) => ({
      ...provided,
      boxShadow: 'none',
      cursor: 'pointer',
      background: `${BLACK_PRIMARY}`,
      borderColor: `${INPUT_BORDER_DEFAULT}`,
      '&:hover': { borderColor: `${INPUT_BORDER_DEFAULT}` }
  }),
  indicatorSeparator: (provided) => ({
      display: 'none'
  }),
  singleValue: (provided) => ({
      ...provided,
      color: `${TEXT_COLOR}`
  }),
  menu: (provided) => ({
      ...provided,
      background: `${BLACK_PRIMARY}`,
      border: `1px solid ${INPUT_BORDER_DEFAULT}`
  }),
  option: (provided) => ({
      ...provided,
      color: `${TEXT_COLOR}`,
      cursor: 'pointer',
      backgroundColor: 'transparent',
      '&:hover': { backgroundColor: `${INPUT_BORDER_FOCUS}` }
  })
}