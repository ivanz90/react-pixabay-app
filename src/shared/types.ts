export type TSelectValue = {
  value: string
  label: string
} 

export type TParamsObj = {
  q: string
  category: string
  image_type: string | TSelectValue
}


export interface IHit {
  id: number;
  pageUrl: string;
  webformatURL: string;
}