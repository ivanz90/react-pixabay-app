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