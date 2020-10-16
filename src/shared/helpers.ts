import { TSelectValue, TParamsObj } from './types'

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

// url params 

export const formatParams = (params: TParamsObj | string | undefined ) => {

  if (typeof params === undefined) return ''

  if (typeof params === 'string' && params.trim() !== '') return `&${params}`

  if (typeof params === 'string' && params.trim() === '') return ''

  if (typeof params === 'object') {

    if (params.image_type && typeof params.image_type === 'object') params.image_type = params.image_type.value

    let res = `${params.q ? `&q=${params.q}` : ''}${
      params.image_type ? `&image_type=${params.image_type}` : ''
    }${params.category ? `&category=${params.category}` : ''}`

    if (res[0] === '&') res = res.slice(1)

    return res
  }
}

export const parseParams = (): TParamsObj => {
  const url = new URL(window.location.href)
  const values: TParamsObj = {}
  for (let p of url.searchParams) {
    Object.assign(values, {[p[0]]: p[1]})
  }

  if (values.image_type && typeof values.image_type === 'string') {
    values.image_type = stringToSelectValue(values.image_type)
  }
  
  return values
}