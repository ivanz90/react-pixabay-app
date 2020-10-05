import { stringToSelectValue } from './helpers'

export const callFakeAPI = async () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done'), 1000)
  })

  let result = await promise

  return result
}

const BASE_URL = 'https://pixabay.com/api/',
  API_KEY = '18392875-f5b524b0a59debad0259affe2'

export const callApi = async (params) => {
  try {
    let response = await fetch(`${BASE_URL}?key=${API_KEY}&${params}`, {
      method: 'GET',
      mode: 'cors'
    })
    return await response.json()
  } catch (err) {
    return err
  }
}

export const formatParams = (params) => {
  if (typeof params === undefined) return ''

  if (typeof params === 'string' && params.trim() !== '') return `&${params}`

  if (typeof params === 'string' && params.trim() === '') return ''

  if (params.image_type && typeof params.image_type === 'object') params.image_type = params.image_type.value

  console.log(params)

  let res = `${params.q ? `&q=${params.q}` : ''}${
    params.image_type ? `&image_type=${params.image_type}` : ''
  }${params.category ? `&category=${params.category}` : ''}`

  if (res[0] === '&') res = res.slice(1)

  console.log(res)

  return res
}

export const parseParams = () => {
  const url = new URL(window.location.href)
  const values = {}
  for (let p of url.searchParams) {
    Object.assign(values, {[p[0]]: p[1]})
  }
  if (values.image_type) {
    values.image_type = stringToSelectValue(values.image_type)
  }
 
  return values
}