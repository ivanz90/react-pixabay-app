import { TSelectValue } from './types'

// string to select value

export const stringToSelectValue = (s: string): TSelectValue => {
  let label: string[] | string = s.split('')
  label[0] = label[0].toUpperCase()
  label = label.join('')
  return {
    value: s,
    label
  }
}