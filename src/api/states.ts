import axios from 'axios'

export const statesApi = axios.create({
  baseURL: process.env.REACT_APP_STATES_API_URL,
  timeout: 1000,
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_STATES_API_KEY ?? '',
    'X-RapidAPI-Host': process.env.REACT_APP_STATES_API_HOST ?? '',
  },
})

export const statesUrls = {
  basic: '/basic',
}
