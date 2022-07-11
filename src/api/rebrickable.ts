import axios from 'axios'

export const rebrickableApi = axios.create({
    baseURL: 'https://rebrickable.com',
    timeout: 1000,
    headers: {
        'Authorization': `key ${process.env.REACT_APP_REBRICKABLE_API_KEY}`,
        'Accept': 'application/json',
    }
})

export const rebrickableUrls = {
    getAllMinifigs: () => '/api/v3/lego/minifigs',
    getPartsOfMinifig: (id: string) => `/api/v3/lego/minifigs/${id}/parts/`,
} 