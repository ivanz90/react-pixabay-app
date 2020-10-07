export type TSelectValue = {
  value: string
  label: string
} 

export type TParamsObj = {
  q: string
  category: string
  image_type: string | TSelectValue
}