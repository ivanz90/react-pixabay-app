const BASE_URL: string = 'https://pixabay.com/api/',
  API_KEY: string = '18392875-f5b524b0a59debad0259affe2'

export const callApi = async (params: string): Promise<any> => {
  try {
    let response = await fetch(`${BASE_URL}?key=${API_KEY}&${params}`, {
      method: 'GET',
      mode: 'cors'
    })
    return await response.json() as Promise<any>
  } catch (err) {
    return err as Promise<any>
  }
}